import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';
import { API_URL, tokens, auth } from '../../variables/ip';
import { scheduleTokenRefresh } from '../../services/tokenService';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleBackPress = () => {
        navigation.navigate('Recommendations');
    };

    const handleRegistrationPress = () => {
        navigation.navigate('Registration');
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`http://${API_URL}/v1/auth`, {
                username,
                password
            });

            if (response.status === 200) {
                const { accessToken, expiresIn, refreshToken, refreshExpiresIn, username, role } = response.data;

                tokens.accessToken = accessToken;
                tokens.expiresIn = expiresIn;
                tokens.refreshToken = refreshToken;
                tokens.refreshExpiresIn = refreshExpiresIn;
                tokens.username = username;
                tokens.role = role;
                auth.status = true;

                console.log('Access Token: ', tokens.accessToken);
                console.log('Access Token Expire Time: ', tokens.expiresIn);
                console.log('Refresh Token: ', tokens.refreshToken);
                console.log('Refresh Token Expire Time: ', tokens.refreshExpiresIn);
                console.log('user: ',tokens.username);
                console.log('role: ',tokens.role);
                console.log('Auth Status: ', auth.status);

                scheduleTokenRefresh(expiresIn, refreshExpiresIn);

                navigation.navigate('Recommendations');
            } else {
                Alert.alert('Ошибка входа', 'Во время входа возникла ошибка, нам уже известно о проблеме и мы работаем над решением');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    Alert.alert('Ошибка входа', 'Такого пользователя не существует');
                } else if (error.response.status === 401) {
                    Alert.alert('Ошибка входа', 'Проверьте правильность введенных данных');
                } else if (error.response.status === 404) {
                    Alert.alert('Ошибка входа', 'Ошибка 404');
                } else {
                    Alert.alert('Ошибка входа', `Ошибка ${error.response.status}`);
                }
            }
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.icon} />
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/man.png')} style={styles.miniicon} />
                        <Text style={styles.label}>Логин</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            maxLength={24}
                            style={styles.input}
                            placeholder="Введите логин"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/lock.png')} style={styles.miniicon} />
                        <Text style={styles.label}>Пароль</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            maxLength={24}
                            style={styles.input}
                            placeholder="Введите пароль"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity onPress={handleRegistrationPress} style={styles.loginLinkContainer}>
                    <Text style={styles.loginLinkText}>Нет аккаунта? Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogin} style={styles.bottomBoxContainer}>
                    <Text style={styles.bottomBoxText}>Вход</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;