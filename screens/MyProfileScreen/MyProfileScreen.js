import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios'; 
import { API_URL, tokens} from '../../variables/ip';


const MyProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = tokens.accessToken;
                const username = tokens.username;
                console.log('Access Token:', accessToken);
                console.log('Username:', username);

                if (!accessToken || !username) {
                    navigation.navigate('Login');
                    return;
                }
                
                const response = await axios.get(`http://${API_URL}:8082/v1/users/${username}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных профиля:', error);
            }
        };

        fetchUserData();
    }, []); 

    const handleBackPress = () => {
        navigation.navigate('Feed');
    };

    const handleExitPress = () => {
        navigation.navigate('Login');
    };

    const handleComplaintPress = () => {
        navigation.navigate('MyProfileEdit');
    };

    const handleMyEvent = () => {
        Alert.alert('Создание мероприятия');
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
                <TouchableOpacity onPress={handleComplaintPress}>
                    <Image 
                        source={require('../../assets/edit.png')} 
                        style={styles.iconTopRight} 
                    />
                </TouchableOpacity>

                <View style={styles.avatarContainer}>
                    <Image 
                        source={avatarSource} 
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{userData.displayName || '-'}</Text>
                    <Text style={styles.nickname}>@{userData.username || '-'}</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>

                        <Image source={require('../../assets/icons/aboutme.png')} style={styles.miniiconabout} />
                        <Text style={styles.label}>{userData.aboutMe || '-'}</Text>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/mail.png')} style={styles.miniiconmail} />
                        <Text style={styles.label}>{userData.email || '-'}</Text>

                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/planet.png')} style={styles.miniiconplanet} />
                        <Text style={styles.label}>{userData.city || '-'}</Text>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/gender.png')} style={styles.miniicongender} />
                        <Text style={styles.label}>{userData.gender || '-'}</Text>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/blackstar.png')} style={styles.miniiconstar} />
                        <Text style={styles.label}>{userData.averageRating || '-'}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleMyEvent} style={styles.bottomBoxContainer}>
                    <Text style={styles.bottomBoxText}>Создать мероприятие</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyProfileScreen;
