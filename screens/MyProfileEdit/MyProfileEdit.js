import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios'; 
import { API_URL, tokens } from '../../variables/ip';

const MyProfileEdit = ({ route }) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = tokens.accessToken;
                const username = tokens.username;
                const response = await axios.get(`http://${API_URL}:8082/v1/users/${username}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    },
                });
                const user = response.data;
                setUserData(user);
                setDisplayName(user.displayName);
                setAboutMe(user.aboutMe);
                setCity(user.city);
                setGender(user.gender);
            } catch (error) {
                console.error('Ошибка при получении данных профиля:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleExitPress = () => {
        navigation.navigate('Login');
    };

    const SavePress = async () => {
        try {
    
            console.log('Отправка данных:', { displayName, aboutMe, city, gender }, 
                
                
            );
    
            const response = await axios.patch(
                `http://${API_URL}:8082/v1/users`,
                { displayName, aboutMe, city, gender },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.accessToken}`
                    },
                }
            );
    
            if (response.status === 200) {
                navigation.navigate('MyProfile');
            } else {
                console.error('Ошибка при сохранении данных на сервере:', response);
                Alert.alert('Не удалось сохранить данные на сервере.');
            }
        } catch (error) {
            console.error('Ошибка при сохранении данных:', error.response?.data || error.message);
            Alert.alert('Ошибка при сохранении данных на сервере.');
        }
    };
    

    const ExitPress = () => {
        navigation.navigate('MyProfile');
    };

    const handlePhotoUpload = () => {
        alert("Загрузка фотографии");
    };

    if (!userData) {
        return (
            <View style={styles.container}>
                <BackButton onPress={handleBackPress} />
                <ExitButton onPress={handleExitPress} />
                <Text>Загрузка профиля...</Text>
            </View>
        );
    }

    const avatarSource = userData.profileImage && userData.profileImage !== '' ? { uri: userData.profileImage } : require('../../assets/nonavatar.png');

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <ExitButton onPress={handleExitPress} />
            <View style={styles.boxContainer}>
                <TouchableOpacity onPress={SavePress}>
                    <Image 
                        source={require('../../assets/saveprofile.png')} 
                        style={styles.iconTopRight} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={ExitPress}>
                    <Image 
                        source={require('../../assets/exiteditors.png')} 
                        style={styles.iconTopLeft} 
                    />
                </TouchableOpacity>

                <View style={styles.avatarContainer}>
                    <Image 
                        source={avatarSource} 
                        style={styles.avatar}
                    />
                    
                    <TouchableOpacity onPress={handlePhotoUpload} style={styles.uploadIconContainer}>
                        <Image 
                            source={require('../../assets/photoedit.png')} 
                            style={styles.uploadIcon} 
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/namesurname.png')} style={styles.miniiconprofile} />
                        
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
                        <Image source={require('../../assets/icons/aboutme.png')} style={styles.miniiconabout} />
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
                        <Image source={require('../../assets/icons/planet.png')} style={styles.miniiconplanet} />
                        <TextInput
                            maxLength={24}
                            style={styles.label}
                            placeholder="Город"
                            value={city}
                            onChangeText={setCity} 
                        />
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/gender.png')} style={styles.miniicongender} />
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
