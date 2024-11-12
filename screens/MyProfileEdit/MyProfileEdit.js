import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton/ExitButton";
import BackButton from "../../components/BackButton/BackButton";
import axios from "axios";
import { API_URL, tokens } from "../../variables/ip";
import * as ImagePicker from "react-native-image-picker";

const MyProfileEdit = ({ route }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = tokens.accessToken;
        const username = tokens.username;
        const response = await axios.get(
          `http://${API_URL}:8082/v1/users/${username}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const user = response.data;
        setUserData(user);
        setDisplayName(user.displayName);
        setAboutMe(user.aboutMe);
        setCity(user.city);
        setGender(user.gender);
      } catch (error) {
        console.error("Ошибка при получении данных профиля:", error);
      }
    };

    const fetchCities = async () => {
      try {
        const accessToken = tokens.accessToken;
        const response = await axios.get(
          `http://${API_URL}:8083/v1/events/cities`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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

    fetchUserData();
    fetchCities();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleExitPress = () => {
    navigation.navigate("Login");
  };

  const handleDeleteImage = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      profileImage: null,
    }));
  };

  const selectNewImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.assets && response.assets.length > 0) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          profileImage: response.assets[0].uri,
        }));
      }
    });
  };

  const SavePress = async () => {
    try {
      console.log("Отправка данных:", { displayName, aboutMe, city, gender });
      const formData = new FormData();
      formData.append("displayName", displayName);
      formData.append("aboutMe", aboutMe);
      formData.append("city", city);
      formData.append("gender", gender);
      if (userData.profileImage) {
        formData.append("profileImage", {
          uri: userData.profileImage,
          type: "image/jpeg",
          name: "profile.jpg",
        });
      }

      const response = await axios.patch(
        `http://${API_URL}:8082/v1/users`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        navigation.navigate("MyProfile");
      } else {
        console.error("Ошибка при сохранении данных на сервере:", response);
        Alert.alert("Не удалось сохранить данные на сервере.");
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error.response?.data || error.message);
      Alert.alert("Ошибка при сохранении данных на сервере.");
    }
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <BackButton onPress={handleBackPress} />
        <ExitButton onPress={handleExitPress} />
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      </View>
    );
  }

  const avatarSource =
    userData.profileImage && userData.profileImage !== ""
      ? { uri: userData.profileImage }
      : require("../../assets/nonavatar.png");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton onPress={handleBackPress} />
        <TouchableOpacity onPress={() => Alert.alert("Уведомление")}>
          <Image
            source={require("../../assets/icons/notification.png")}
            style={styles.notificationStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity onPress={SavePress}>
          <Image
            source={require("../../assets/saveprofile.png")}
            style={styles.iconTopRight}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
          <Image
            source={require("../../assets/exiteditors.png")}
            style={styles.iconTopLeft}
          />
        </TouchableOpacity>

        <View style={styles.avatarContainer}>
          <Image source={avatarSource} style={styles.avatar} />
          <TouchableOpacity
            onPress={selectNewImage}
            style={styles.uploadIconContainer}
          >
            <Image
              source={require("../../assets/photoedit.png")}
              style={styles.uploadIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/namesurname.png")}
              style={styles.miniiconprofile}
            />
            <TextInput
              maxLength={32}
              style={styles.label}
              placeholder="Имя и фамилия"
              value={displayName}
              onChangeText={setDisplayName}
              keyboardType="default"
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/aboutme.png")}
              style={styles.miniiconabout}
            />
            <TextInput
              maxLength={500}
              style={styles.label}
              placeholder="Обо мне"
              value={aboutMe}
              onChangeText={setAboutMe}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/planet.png")}
              style={styles.miniiconplanet}
            />
            <DropDownPicker
              open={open}
              value={city}
              items={cities}
              setOpen={setOpen}
              setValue={setCity}
              placeholder={city || "Выберите город"}
              containerStyle={styles.dropDownPickerContainer}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              style={styles.dropDownPickerStyle}
              arrowStyle={styles.arrowStyle}
              labelStyle={styles.dropDownLabelStyle}
              selectedItemLabelStyle={styles.dropDownSelectedItemLabelStyle}
              placeholderStyle={styles.placeholderStyle}
              listMode="SCROLLVIEW"
              itemStyle={styles.dropDownItemStyle}
              renderListItem={(item) => (
                <View
                  style={[styles.dropDownItemStyle, { borderBottomWidth: 1, borderBottomColor: "#D3D3D3" }]}
                >
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      setCity(item.value);
                      setOpen(false);
                    }}
                  >
                    <Text
                      style={[styles.dropDownLabelStyle, { marginLeft: 10 }]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                  <View style={{ flex: 1 }} />
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/gender.png")}
              style={styles.miniicongender}
            />
            <TextInput
              maxLength={24}
              style={styles.label}
              placeholder="Гендер"
              value={gender}
              onChangeText={setGender}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyProfileEdit;
