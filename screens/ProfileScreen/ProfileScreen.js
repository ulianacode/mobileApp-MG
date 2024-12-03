import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios'; 
import { API_URL, tokens} from '../../variables/ip';


const ProfileScreen = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const route = useRoute();
    const { username } = route.params; 

    useEffect(() => {
        if (!username) {
            navigation.navigate('MyProfile');
            return;
        }

        const fetchUserData = async () => {
            try {
                const accessToken = tokens.accessToken;
                const response = await axios.get(`http://${API_URL}/v1/users/${username}`, {
                    headers: tokens.accessToken
                    ? { Authorization: `Bearer ${tokens.accessToken}` }
                    : {},
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных профиля:', error);
            }
        };

        fetchUserData();
    }, [navigation, username]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleExitPress = () => {
        navigation.navigate('Login');
    };

    const handleComplaintPress = () => {
        navigation.navigate('UserComplaint', { reported: username }); 
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

    const genderText = userData.gender === 'MALE' ? 'Мужчина' : (userData.gender === 'FEMALE' ? 'Женщина' : '-');

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <ExitButton onPress={handleExitPress} />
            <View style={styles.boxContainer}>
                <TouchableOpacity onPress={handleComplaintPress}>
                    <Image 
                        source={require('../../assets/attention-stop.png')} 
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
                        <Text style={styles.label}>{genderText}</Text>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/blackstar.png')} style={styles.miniiconstar} />
                        <Text style={styles.label}>{userData.averageRating || '-'}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;

