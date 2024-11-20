import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios'; 
import { API_URL, tokens, auth} from '../../variables/ip';


const MyProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState("");

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
            
            const response = await axios.get(`http://${API_URL}/v1/users/${username}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, 
                },
            });
            setUserData(response.data);
            console.log(userData.profileImage);
        } catch (error) {
            console.error('Ошибка при получении данных профиля:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []); 

    useFocusEffect(
        React.useCallback(() => {
            fetchUserData();
        }, [])
    );

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleExitPress = () => {
        tokens.accessToken = null;
        tokens.expiresIn = null;
        tokens.refreshToken = null;
        tokens.refreshExpiresIn = null;
        tokens.username = null;
        tokens.role = null;
        auth.status = false;
        navigation.navigate('Login');
    };

    const handleNotifications = () => {
        Alert.alert('Уведомление');
    };

    const handleComplaintPress = () => {
        navigation.navigate('MyProfileEdit');
    };

    const handleMyEvent = () => {
        navigation.navigate('AddingEventCard');
    };

    if (!userData) {
        return (
            <View style={styles.container}>
                <ExitButton onPress={handleExitPress} />
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
            </View>
        );
    }

    const avatarSource = userData.profileImage && userData.profileImage !== '' ? { uri: userData.profileImage } : require('../../assets/nonavatar.png');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}> 
                <BackButton onPress={handleBackPress} />
                <TouchableOpacity onPress={handleNotifications}>
                    <Image
                        source={require('../../assets/icons/notification.png')}
                        style={styles.notificationStyle}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
            <TouchableOpacity onPress={handleExitPress} style={styles.buttonContainer}>
                <Image source={require('../../assets/exit.png')} style={styles.image} />
            </TouchableOpacity>
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
