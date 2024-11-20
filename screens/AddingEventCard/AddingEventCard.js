import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
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

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `http://${API_URL}/v1/events/cities`,
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );
        const sortedCities = response.data.sort((a, b) => a.localeCompare(b));
        const formattedCities = sortedCities.map((city) => ({
          label: city,
          value: city,
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
        Alert.alert("Успешно", "Событие обновлено!");
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
    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="never"
    >
      <BackButton onPress={handleBackPress} />
      <IconButtons />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.boxContainer}>
            {[
              { label: "Название *", value: title, setter: setEventName },
              {
                label: "Дата начала (ДД.ММ.ГГГГ чч:мм) *",
                value: startDateTime,
                setter: setStartDate,
              },
              {
                label: "Дата конца (ДД.ММ.ГГГГ чч:мм) *",
                value: endDateTime,
                setter: setEndDate,
              },
              { label: "Адрес *", value: address, setter: setAddress },
            ].map((field, index) => (
              <View key={index} style={styles.fieldContainer}>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>{field.label}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    maxLength={24}
                    style={styles.input}
                    value={field.value}
                    onChangeText={field.setter}
                  />
                </View>
                <View style={styles.line} />
              </View>
            ))}

            <View style={styles.fieldContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Город *</Text>
              </View>
              <DropDownPicker
                open={open}
                value={city}
                items={cities}
                setOpen={setOpen}
                setValue={setCity}
                setItems={setCities}
                placeholder="Выберите город"
                containerStyle={styles.dropDownPickerContainer}
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
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Описание</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  maxLength={150}
                  style={styles.input}
                  value={description}
                  onChangeText={setDescription}
                  multiline
                />
              </View>
              <View style={styles.line} />
            </View>

            <TouchableOpacity
              onPress={handleImageUpload}
              style={styles.fieldContainer}
            >
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Загрузить изображение</Text>
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
              <Text style={styles.bottomBoxText}>Создать мероприятие</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 20 }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddingEventCard;
