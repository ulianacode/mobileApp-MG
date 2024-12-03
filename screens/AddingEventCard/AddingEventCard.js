import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton/BackButton";
import IconButtons from "../../components/IconButtons/IconButtons";
import DropDownPicker from "react-native-dropdown-picker";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { validateDates } from "../../utils/validation";
import MapView, { Marker } from "react-native-maps";

const AddingEventCard = () => {
  const navigation = useNavigation();
  const [title, setEventName] = useState("");
  const [startDateTime, setStartDate] = useState("");
  const [endDateTime, setEndDate] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [city, setCity] = useState("Москва");
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [dateErrors, setDateErrors] = useState("");

  const [visibility, setVisibility] = useState("OPEN");
  const [visibilityOptions] = useState([
    { label: "Открытое", value: "OPEN" },
    { label: "Закрытое", value: "CLOSED" },
    { label: "Для друзей", value: "FRIENDS_ONLY" },
  ]);

  const [openVisibility, setOpenVisibility] = useState(false);

  const [mapVisible, setMapVisible] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://${API_URL}/v1/events/cities`, {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        });
        const sortedCities = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const formattedCities = sortedCities.map((city) => ({
          label: city.name,
          value: city.name,
        }));
        setCities(formattedCities);
      } catch (error) {
        console.error("Ошибка при получении списка городов:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCreateEvent = async () => {
    if (!title || !startDateTime || !endDateTime || !address || !city) {
      Alert.alert("Ошибка", "Пожалуйста, заполните все обязательные поля.");
      return;
    }

    setStartDateError("");
    setEndDateError("");
    setDateErrors("");

    const { startDateError, endDateError } = validateDates(
      startDateTime,
      endDateTime
    );

    if (startDateError || endDateError) {
      setStartDateError(startDateError);
      setEndDateError(endDateError);
      return;
    }

    setStartDateError("");
    setEndDateError("");
    setDateErrors("");

    try {
      let latitude, longitude;

      const fullAddress = `${address}, ${city}`;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          fullAddress
        )}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        latitude = parseFloat(lat);
        longitude = parseFloat(lon);
      } else {
        const cityResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            city
          )}&format=json`
        );
        const cityData = await cityResponse.json();

        if (cityData.length > 0) {
          const { lat, lon } = cityData[0];
          latitude = parseFloat(lat);
          longitude = parseFloat(lon);
        } else {
          Alert.alert(
            "Ошибка",
            "Адрес и город не найдены. Пожалуйста, проверьте введенные данные."
          );
          return;
        }
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("startDateTime", startDateTime);
      formData.append("endDateTime", endDateTime);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("cityName", city);
      formData.append("latitude", latitude);
      formData.append("longitude", longitude);

      if (eventImage) {
        formData.append("eventImage", {
          uri: eventImage,
          name: "eventImage.jpg",
          type: "image/jpeg",
        });
      }

      const createResponse = await axios.post(
        `http://${API_URL}:8083/v1/events`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const eventId = createResponse.data;
        handlePress(eventId);
      } else {
        Alert.alert("Ошибка", "Не удалось обновить событие.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ошибка", "Произошла ошибка при отправке данных.");
    }
  };

  const handlePress = (eventId) => {
    navigation.navigate("EventCardInsideScreen", { eventId: eventId });
  };

  const handleImageUpload = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Ошибка", "Разрешение на доступ к галерее не получено.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setEventImage(result.assets[0].uri);
    }
  };

  const handleMapPress = () => {
    if (city && address) {
      const fullAddress = `${address}, ${city}`;
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          fullAddress
        )}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            setLatitude(parseFloat(lat));
            setLongitude(parseFloat(lon));
            setMapVisible(true);
          } else {
            Alert.alert("Ошибка", "Адрес не найден.");
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении координат:", error);
          Alert.alert("Ошибка", "Произошла ошибка при получении координат.");
        });
    } else {
      Alert.alert("Ошибка", "Пожалуйста, заполните город и адрес.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <BackButton onPress={handleBackPress} />

        <Text style={[styles.addEventText, styles.interBold]}>
          {" "}
          Создание мероприятия{" "}
        </Text>
        <View style={styles.boxContainer}>
          {[{ label: "Название", value: title, setter: setEventName }].map(
            (field, index) => (
              <View key={index} style={styles.fieldContainer}>
                <Text style={[styles.label, styles.interBold]}>
                  {field.label}
                </Text>
                <TextInput
                  style={[styles.input]}
                  value={field.value}
                  onChangeText={field.setter}
                  placeholder={`Введите ${field.label.toLowerCase()}`}
                />
              </View>
            )
          )}

          <View style={styles.rowContainer}>
            <View style={styles.halfFieldContainer}>
              <Text
                style={[styles.label, styles.interBold, { textAlign: "left" }]}
              >
                Начало
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { borderBottomWidth: 1, textAlign: "left" },
                ]}
                value={startDateTime}
                onChangeText={setStartDate}
                placeholder="ДД.ММ.ГГГГ чч:мм"
              />
            </View>

            <View style={styles.separator}>
              <Text style={styles.dash}>—</Text>
            </View>

            <View style={styles.halfFieldContainer}>
              <Text
                style={[styles.label, styles.interBold, { textAlign: "right" }]}
              >
                Конец
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { borderBottomWidth: 1, textAlign: "right" },
                ]}
                value={endDateTime}
                onChangeText={setEndDate}
                placeholder="ДД.ММ.ГГГГ чч:мм"
              />
            </View>
          </View>

          {(startDateError || endDateError) && (
            <View style={styles.errorContainer}>
              {startDateError && (
                <Text style={styles.errorText}>{startDateError}</Text>
              )}
              {endDateError && (
                <Text style={styles.errorText}>{endDateError}</Text>
              )}
            </View>
          )}

          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text
                style={[styles.label, styles.interBold, { marginBottom: -3 }]}
              >
                Город
              </Text>
            </View>
            <DropDownPicker
              open={open}
              value={city}
              items={cities}
              setOpen={setOpen}
              setValue={setCity}
              setItems={setCities}
              placeholder="Выберите город"
              containerStyle={[
                styles.dropDownPickerContainer,
                { marginLeft: -2, width: "101%" },
              ]}
              dropDownContainerStyle={[
                styles.dropDownContainerStyle,
                { maxHeight: 162 },
              ]}
              style={styles.dropDownPickerStyle}
              arrowStyle={styles.arrowStyle}
              labelStyle={[
                styles.dropDownLabelStyle,
                {
                  fontWeight: "bold",
                  fontSize: 15,
                  fontFamily: "Inter_700Bold",
                },
              ]}
              selectedItemLabelStyle={[
                styles.dropDownSelectedItemLabelStyle,
                {
                  fontWeight: "bold",
                  fontSize: 16,
                  fontFamily: "Inter_700Bold",
                },
              ]}
              placeholderStyle={styles.placeholderStyle}
              listMode="SCROLLVIEW"
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={[styles.label, styles.interBold]}>Адрес</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
              }}
            >
              <TextInput
                style={[
                  styles.input,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    width: "100%",
                  },
                ]}
                value={address}
                onChangeText={setAddress}
                placeholder="Введите адрес"
              />
              <TouchableOpacity
                onPress={handleMapPress}
                style={styles.mapIconContainer}
              >
                <Image
                  source={require("../../assets/icons/map.png")}
                  style={styles.mapIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={[styles.label, styles.interBold]}>
              Дополнительная информация
            </Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              placeholder="Введите описание"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={[styles.label, styles.interBold, { marginBottom: 7 }]}>
              Видимость
            </Text>
            <DropDownPicker
              open={openVisibility}
              value={visibility}
              items={visibilityOptions}
              setOpen={setOpenVisibility}
              setValue={setVisibility}
              labelStyle={[
                styles.dropDownLabelStyle,
                {
                  fontWeight: "bold",
                  fontSize: 15,
                  fontFamily: "Inter_700Bold",
                },
              ]}
              selectedItemLabelStyle={[
                styles.dropDownSelectedItemLabelStyle,
                {
                  fontWeight: "bold",
                  fontSize: 16,
                  fontFamily: "Inter_700Bold",
                },
              ]}
              placeholder="Выберите видимость"
              containerStyle={[
                styles.dropDownPickerContainer,
                { marginLeft: -2, width: "101%" },
              ]}
            />
          </View>

          <TouchableOpacity
            onPress={handleImageUpload}
            style={styles.fieldContainer}
          >
            <View style={styles.labelContainerPhoto}>
              {eventImage ? (
                <Image
                  source={{ uri: eventImage }}
                  style={styles.labelPhotoadd}
                />
              ) : (
                <Image
                  source={require("../../assets/photosend.png")}
                  style={styles.labelPhotoadd}
                />
              )}
              <Text style={[styles.labelPhoto, styles.interBold]}>
                Загрузить изображение
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCreateEvent}
            style={styles.bottomBoxContainer}
          >
            <Text style={styles.bottomBoxText}>Создать</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }} />
        </View>
      </View>

      <Modal visible={mapVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View
            style={{
              width: 350,
              height: 350,
              backgroundColor: "white",
              borderRadius: 14,
              resizeMode: "contain",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {latitude && longitude ? (
              <View style={styles.mapWrapper}>
                <TouchableOpacity
                  onPress={() => setMapVisible(false)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/close.png")}
                    style={{ width: 32, height: 32, tintColor: "black" }}
                  />
                </TouchableOpacity>
                <View style={styles.mapContainer}>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude,
                      longitude,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  >
                    <Marker coordinate={{ latitude, longitude }} />
                  </MapView>
                </View>
              </View>
            ) : (
              <Text style={styles.mapErrorText}>Координаты недоступны</Text>
            )}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default AddingEventCard;
