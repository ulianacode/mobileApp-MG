import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles"; // импорт стилей из того же файла
import { API_URL } from "../../variables/ip";
import BackButton from "../../components/BackButton/BackButton";

const ResetPasswordRequestScreen = () => {
  const navigation = useNavigation();
  const [identifier, setIdentifier] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPasswordRequest = async () => {
    if (!identifier.trim()) {
      setErrorText("Введите логин или почту");
      return;
    }

    try {
      const response = await axios.post(`http://${API_URL}/v1/auth/reset`, {
        identifier,
      });

      if (response.status === 200) {
        setErrorText("");
        navigation.navigate("ResetPasswordConfirm", { identifier });
      }
    } catch (error) {
      setErrorText("Такого пользователя не существует");
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBackPress} />

      <View style={styles.iconContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.icon} />
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/mail2.png")}
              style={styles.miniicon}
            />
            <Text style={styles.label}>Введите логин или почту</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={identifier}
              onChangeText={setIdentifier}
              placeholder="Введите ваш логин или почту"
            />
          </View>
          <View style={styles.line} />
          {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
        </View>
        <TouchableOpacity
          onPress={handleResetPasswordRequest}
          style={styles.bottomBoxContainer}
          disabled={isLoading}
        >
          <Text style={styles.bottomBoxText}>
            {isLoading ? "Загрузка..." : "Отправить код"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordRequestScreen;
