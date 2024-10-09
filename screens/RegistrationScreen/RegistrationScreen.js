import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';

const RegistrationScreen = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate('Feed');
    };
    const handleBottomBoxPress = () => {
        Alert.alert('Registration');
    };
    const handleLoginPress = () => {
        navigation.navigate('Login');
        
    };

    return (
      <View style = {styles.container}>
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
                        <TextInput style={styles.input} placeholder="Введите почту" />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/man.png')} style={styles.miniicon} />
                        <Text style={styles.label}>Логин</Text>
                    </View>
                    <View style={styles.inputContainer}>
                          <TextInput maxLength={24} style={styles.input} placeholder="Введите логин" />
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/lock.png')} style={styles.miniicon} />
                        <Text style={styles.label}>Пароль</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput maxLength={24} style={styles.input} placeholder="Введите пароль" secureTextEntry />
                    </View>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity onPress={handleLoginPress} style={styles.loginLinkContainer}>
                    <Text style={styles.loginLinkText}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBottomBoxPress} style={styles.bottomBoxContainer}>
                <Text style={styles.bottomBoxText}>Регистрация</Text>
              </TouchableOpacity>
            </View>
      </View>
            
  );
};

export default RegistrationScreen;