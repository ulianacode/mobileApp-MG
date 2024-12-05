import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';
import axios from 'axios';
import { API_URL, tokens } from '../../variables/ip';

const ProfileScreen = () => {
const navigation = useNavigation();
const [userData, setUserData] = useState(null);
const [friendStatusCheck, setFriendStatus] = useState(null);
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
            setFriendStatus(response.data.friendStatus);
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

let iconGender;
if (userData.gender === 'MALE') {
    iconGender = require('../../assets/male.png');
} else if (userData.gender === 'FEMALE') {
    iconGender = require('../../assets/female.png');
}

let iconSource;

if (friendStatusCheck === 'SENT') {
    iconSource = require('../../assets/sendrequest.png');
} else if (friendStatusCheck === 'ACCEPTED') {
    iconSource = require('../../assets/minus.png');
} else if (friendStatusCheck === 'NOT_FRIENDS') {
    iconSource = require('../../assets/plus.png');
} else if (friendStatusCheck === 'PENDING') {
    iconSource = require('../../assets/income.png');
}

const handlePress = async () => {
    if (friendStatusCheck === 'NOT_FRIENDS') {
        try {
            const response = await axios.post(
                `http://${API_URL}/v1/friendships/action`,
                {
                    receiverUsername: username,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                Alert.alert('Успешно', 'Запрос на дружбу отправлен.');
                setFriendStatus('SENT');
            } else {
                Alert.alert('Ошибка', 'Не удалось отправить запрос на дружбу.');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
            console.error(error);
        }
    } else if (friendStatusCheck === 'ACCEPTED') {
        try {
            const response = await axios.delete(
                `http://${API_URL}/v1/friendships/${username}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokens.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                Alert.alert('Успешно', 'Пользователь удален из друзей.');
                setFriendStatus('NOT_FRIENDS');
            } else {
                Alert.alert('Ошибка', 'Не удалось удалить пользователя из друзей.');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Произошла ошибка при удалении пользователя.');
            console.error(error);
        }
    } else if (friendStatusCheck === 'PENDING') {
        try {
            const response = await axios.put(
                `http://${API_URL}/v1/friendships/decision`,
                {
                    senderUsername: username,
                    decision: 'ACCEPTED',
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                Alert.alert('Успешно', 'Запрос отправлено.');
                setFriendStatus('ACCEPTED');
            } else {
                Alert.alert('Ошибка', 'Не удалось отправить запрос.');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
            console.error(error);
        }
    } else if (friendStatusCheck === 'SENT') {
        try {
            const response = await axios.post(
                `http://${API_URL}/v1/friendships/action`,
                {
                    receiverUsername: username,
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokens.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                Alert.alert('Успешно', 'Запрос отменен.');
                setFriendStatus('NOT_FRIENDS');
            } else {
                Alert.alert('Ошибка', 'Не удалось отправить запрос.');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
            console.error(error);
        }
    } else {
        Alert.alert('Информация', 'Действие недоступно для текущего статуса.');
    }
};

return (
    <View style={styles.container}>
        <BackButton onPress={handleBackPress} />
        <ExitButton onPress={handleExitPress} />
        <View style={styles.boxContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Image source={iconSource} style={styles.iconTopLeft} />
            </TouchableOpacity>
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
                    <Image source={iconGender}  style={styles.miniicongender} />
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