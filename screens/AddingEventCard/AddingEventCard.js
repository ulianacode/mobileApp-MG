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

const AddingEventCard = () => {
  const navigation = useNavigation();
  const [title, setEventName] = useState("");
  const [startDateTime, setStartDate] = useState("");
  const [endDateTime, setEndDate] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [dateErrors, setDateErrors] = useState("");

  const [visibility, setVisibility] = useState(null);
  const [visibilityOptions] = useState([
    { label: "Открытое", value: "OPEN" },
    { label: "Закрытое", value: "CLOSED" },
    { label: "Для друзей", value: "FRIENDS_ONLY" },
  ]);

  const [openVisibility, setOpenVisibility] = useState(false);

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
      const formData = new FormData();
      formData.append("title", title);
      formData.append("startDateTime", startDateTime);
      formData.append("endDateTime", endDateTime);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("cityName", city);

      if (eventImage) {
        formData.append("eventImage", {
          uri: eventImage,
          name: "eventImage.jpg",
          type: "image/jpeg",
        });
      }

      const response = await axios.post(
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
        Alert.alert("Успешно", "Событие добавлено!");
        setEventName("");
        setStartDate("");
        setEndDate("");
        setAddress("");
        setDescription("");
        setEventImage(null);
        setCity("");
      } else {
        Alert.alert("Ошибка", "Не удалось обновить событие.");
      }
    } catch (error) {
      Alert.alert("Ошибка", "Произошла ошибка при отправке данных.");
    }
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
                  style={styles.input}
                  value={field.value}
                  onChangeText={field.setter}
                  placeholder={`Введите ${field.label.toLowerCase()}`}
                />
              </View>
            )
          )}

          <View style={styles.rowContainer}>
            <View style={styles.halfFieldContainer}>
              <Text style={[styles.label, styles.interBold]}>Начало</Text>
              <TextInput
                style={styles.input}
                value={startDateTime}
                onChangeText={setStartDate}
                placeholder="ДД.ММ.ГГГГ чч:мм"
              />
            </View>

            <View style={styles.separator}></View>

            <View style={styles.halfFieldContainer}>
              <Text style={[styles.label, styles.interBold]}>Конец</Text>
              <TextInput
                style={styles.input}
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
              <Text style={[styles.label, styles.interBold, { marginBottom: -5 }]}>Город</Text>
            </View>
            <DropDownPicker
              open={open}
              value={city}
              items={cities}
              setOpen={setOpen}
              setValue={setCity}
              setItems={setCities}
              placeholder="Выберите город"
              containerStyle={[styles.dropDownPickerContainer, { marginLeft: -2, width: '101%' }]}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              style={styles.dropDownPickerStyle}
              arrowStyle={styles.arrowStyle}
              labelStyle={styles.dropDownLabelStyle}
              selectedItemLabelStyle={styles.dropDownSelectedItemLabelStyle}
              placeholderStyle={styles.placeholderStyle}
              listMode="SCROLLVIEW"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={[styles.label, styles.interBold]}>Адрес</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Введите адрес"
            />
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
            <Text style={[styles.label, styles.interBold]}>Видимость</Text>
            <DropDownPicker
              open={openVisibility}
              value={visibility}
              items={visibilityOptions}
              setOpen={setOpenVisibility}
              setValue={setVisibility}
              placeholder="Выберите видимость"
              containerStyle={[styles.dropDownPickerContainer, { marginLeft: -2, width: '101%' }]}
            />
          </View>

          <TouchableOpacity
            onPress={handleImageUpload}
            style={styles.fieldContainer}
          >
            <View style={styles.labelContainerPhoto}>
              <Image
                source={require("../../assets/photosend.png")}
                style={styles.labelPhotoadd}
              />
              <Text style={[styles.labelPhoto, styles.interBold]}>
                Загрузить изображение
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {eventImage && (
              <Image
                source={{ uri: eventImage }}
                style={styles.iconeyeandprofile}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={handleCreateEvent}
            style={styles.bottomBoxContainer}
          >
            <Text style={styles.bottomBoxText}>Создать</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddingEventCard;
