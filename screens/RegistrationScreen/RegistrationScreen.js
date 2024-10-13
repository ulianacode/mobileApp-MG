import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';

const RegistrationScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleBackPress = () => {
        navigation.navigate('Feed');
    };

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://25.17.98.51:8082/v1/users', {
                email,
                username,
                password
            });
            if (response.status === 200) {
                Alert.alert('Ваш аккаунт зарегистрирован!', '');
                navigation.navigate('Login');
            } else {
                Alert.alert('Ошибка регистрации', 'Неизвестная ошибка');
            }
        } catch (error) {
            //Bug (error status == undefined)
            console.log(error.status)
            if (error.status == undefined){
                Alert.alert('Ошибка регистрации', 'Проверьте правильность введённых данных');
            }
            if (error.response) {
                if (error.response.status === 400) {
                    Alert.alert('Ошибка регистрации', 'Проверьте правильность введённых данных');
                } else if (error.response.status === 404) {
                    Alert.alert('Ошибка регистрации', 'Проверьте правильность введённых данных');
                } else {
                    Alert.alert('Ошибка регистрации', `Ошибка ${error.response.status}`);
                }
            }
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
                        <Image source={require('../../assets/icons/mail.png')} style={styles.miniiconmail} />
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
                </View>
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
                <TouchableOpacity onPress={handleLoginPress} style={styles.loginLinkContainer}>
                    <Text style={styles.loginLinkText}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegistration} style={styles.bottomBoxContainer}>
                    <Text style={styles.bottomBoxText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegistrationScreen;