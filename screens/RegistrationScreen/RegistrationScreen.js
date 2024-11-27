import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton/BackButton";
import { API_URL, tokens } from "../../variables/ip";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../../utils/validation";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleRegistration = async () => {
    setEmailError("");
    setUsernameError("");
    setPasswordError("");

    const emailValidationError = validateEmail(email);
    const usernameValidationError = validateUsername(username);
    const passwordValidationError = validatePassword(password);

    if (emailValidationError) setEmailError(emailValidationError);
    if (usernameValidationError) setUsernameError(usernameValidationError);
    if (passwordValidationError) setPasswordError(passwordValidationError);

    if (
      emailValidationError ||
      usernameValidationError ||
      passwordValidationError
    ) {
      return;
    }

    try {
      const response = await axios.post(`http://${API_URL}/v1/users`, {
        email,
        username,
        password,
      });
      if (response.status === 200) {
        navigation.navigate("EmailVerification", { email });
      } else {
        Alert.alert("Ошибка регистрации", "Неизвестная ошибка");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          Alert.alert(
            "Ошибка регистрации",
            "Пользователь с таким логином или почтой уже существует"
          );
        } else if (error.response.status === 404) {
          Alert.alert(
            "Ошибка регистрации",
            "Проверьте правильность введённых данных"
          );
        } else {
          Alert.alert("Ошибка регистрации", `Ошибка ${error.response.status}`);
        }
      } else {
        Alert.alert(
          "Ошибка регистрации",
          "Проверьте правильность введённых данных"
        );
      }
    }
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
            <Text style={styles.label}>Почта</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Введите почту"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.line} />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/man.png")}
              style={styles.miniicon}
            />
            <Text style={styles.label}>Логин</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              maxLength={32}
              style={styles.input}
              placeholder="Введите логин"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.line} />
          {usernameError ? (
            <Text style={styles.errorText}>{usernameError}</Text>
          ) : null}
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.labelContainer}>
            <Image
              source={require("../../assets/icons/lock.png")}
              style={styles.miniicon}
            />
            <Text style={styles.label}>Пароль</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              maxLength={32}
              style={styles.input}
              placeholder="Введите пароль"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.line} />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginLinkText}>Уже есть аккаунт? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginLinkTextClickable}>Войти</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleRegistration}
          style={styles.bottomBoxContainer}
        >
          <Text style={styles.bottomBoxText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen;
