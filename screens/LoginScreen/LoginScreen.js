import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate('Feed');
    };
    const handleRecoverPress = () => {
        Alert.alert('Recover Password');
    };
    const handleLoginPress = () => {
        Alert.alert('Login');
    };
    const handleRegPress = () => {
        navigation.navigate('Registration');
        
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
                <TouchableOpacity onPress={handleRegPress} style={styles.regLinkContainer}>
                    <Text style={styles.loginLinkText}>Ещё нет аккаунта? Регистрация</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRecoverPress} style={styles.recoverLinkContainer}>
                    <Text style={styles.loginLinkText}>Не помню пароль</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLoginPress} style={styles.bottomBoxContainer}>
                <Text style={styles.bottomBoxText}>Вход</Text>
              </TouchableOpacity>
            </View>
      </View>
            
  );
};

export default LoginScreen;