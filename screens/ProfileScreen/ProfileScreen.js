import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ExitButton from '../../components/ExitButton/ExitButton';
import BackButton from '../../components/BackButton/BackButton';

const ProfileScreen = () => {
    const navigation = useNavigation();
    
    const handleBackPress = () => {
        navigation.navigate('Feed');
    };
    
    const handleExitPress = () => {
        navigation.navigate('Login');
    };
    
    const handleComplaintPress = () => {
        Alert.alert('Жалоба');
    };

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
                        source={require('../../assets/avatar.png')} 
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Имя Фамилия</Text>
                    <Text style={styles.nickname}>@nickname</Text>
                </View>
                
                <View style={styles.fieldContainer}>
                    <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/aboutme.png')} style={styles.miniiconabout} />
                        <Text style={styles.label}>Обо мне</Text>
                    </View>
                </View>
                
                <View style={styles.fieldContainer}>
                <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/mail2.png')} style={styles.miniiconmail} />
                        <Text style={styles.label}>aesdfvghbjnkml@yan.hru</Text>
                    </View>
                </View>
                
                <View style={styles.fieldContainer}>
                <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/icons/planet.png')} style={styles.miniiconplanet} />
                        <Text style={styles.label}>Воронеж</Text>
                    </View>
                </View>
                
                <View style={styles.fieldContainer}>
                <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/gender1.png')} style={styles.miniicongender} />
                        <Text style={styles.label}>Женщина</Text>
                    </View>
                </View>
                
                <View style={styles.fieldContainer}>
                <View style={styles.line} />
                    <View style={styles.labelContainer}>
                        <Image source={require('../../assets/blackstar.png')} style={styles.miniiconstar} />
                        <Text style={styles.label}>Рейтинг</Text>
                        <Text style={styles.label}></Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;

