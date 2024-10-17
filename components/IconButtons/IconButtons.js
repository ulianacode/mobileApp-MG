import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const IconButtons = () => {
    const navigation = useNavigation();

    const handleEyePress = () => {
        Alert.alert('Просмотр карточки');
    };

    const handlePeoplePress = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handlePeoplePress} style={styles.iconButton}>
                <Image source={require('../../assets/account_circle.png')} style={styles.iconeyeandprofile} />
            </TouchableOpacity>
        </View>
    );
};

export default IconButtons;
