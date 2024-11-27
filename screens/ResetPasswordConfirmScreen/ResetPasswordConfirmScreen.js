import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { API_URL } from "../../variables/ip";
import BackButton from "../../components/BackButton/BackButton";

const ResetPasswordConfirmScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { identifier } = route.params;

  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmPasswordReset = async () => {
    setIsLoading(true);

    if (!token.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setErrorText("Пожалуйста, заполните все поля");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorText("Пароли не совпадают");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://${API_URL}/v1/auth/reset/confirm`,
        {
          identifier,
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        setErrorText("");
        navigation.navigate("Login");
      }
    } catch (error) {
      setErrorText("Ошибка сброса пароля. Попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://${API_URL}/v1/auth/reset`, {
        identifier,
      });

      if (response.status === 200) {
        setErrorText("Код успешно отправлен повторно");
      }
    } catch (error) {
      setErrorText("Ошибка при отправке кода. Попробуйте позже.");
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
              style={styles.miniiconmail}
            />
            <Text style={styles.label}>Код подтверждения</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={token}
              onChangeText={setToken}
              placeholder="Введите код подтверждения"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/lock.png")}
              style={styles.miniicon}
            />
            <Text style={styles.label}>Новый пароль</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Новый пароль"
              secureTextEntry
            />
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/lockconfirm.png")}
              style={styles.miniicon}
            />
            <Text style={styles.label}>Подтверждение пароля</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Введите новый пароль еще раз"
              secureTextEntry
            />
          </View>
          <View style={styles.line} />
        </View>

        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginLinkText}>Не пришел код? </Text>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.loginLinkTextClickable}>
              Отправить повторно
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleConfirmPasswordReset}
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

export default ResetPasswordConfirmScreen;
