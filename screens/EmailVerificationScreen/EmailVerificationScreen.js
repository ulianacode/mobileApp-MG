import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../../components/BackButton/BackButton";
import { API_URL } from "../../variables/ip";

const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [verificationCode, setVerificationCode] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmRegistration = async () => {
    setIsLoading(true);

    if (!verificationCode.trim()) {
      setErrorText("Введите код подтверждения");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://${API_URL}/v1/users/verification`,
        {
          email,
          verificationCode,
        }
      );

      if (response.status === 200) {
        setErrorText("");
        navigation.navigate("Login");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorText("Неверный код подтверждения");
        } else if (error.response.status === 404) {
          setErrorText("Пользователь не найден");
        } else {
          setErrorText(`Ошибка ${error.response.status}`);
        }
      } else {
        setErrorText("Не удалось подтвердить почту");
      }
    } finally {
      setIsLoading(false);
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
            <Text style={styles.label}>Код подтверждения</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              maxLength={6}
              style={styles.input}
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.line} />
          {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
        </View>

        <TouchableOpacity
          onPress={handleConfirmRegistration}
          style={styles.bottomBoxContainer}
          disabled={isLoading}
        >
          <Text style={styles.bottomBoxText}>
            {isLoading ? "Загрузка..." : "Подтвердить"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailVerificationScreen;
