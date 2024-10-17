import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const AddEventForm = () => {
    const handleBottomBoxPress = () => {
        Alert.alert('Создалось)');
    };
    return (
        <View style={styles.boxContainer}>
            {['Название', 'Дата начала', 'Дата конца', 'Адрес', 'Описание'].map((label, index) => (
                <View key={index} style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>{label} *</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput maxLength={24} style={styles.input} secureTextEntry={label !== 'Название'} />
                    </View>
                    <View style={styles.line} />
                </View>
            ))}
            <TouchableOpacity onPress={() => Alert.alert('Загрузка')} style={styles.loginLinkContainer}>
                <View style={styles.labelPhotoContainer}>
                    <Image source={require('../../assets/photosend.png')} style={styles.miniicon} />
                    <Text style={styles.label}>Загрузить изображение</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBottomBoxPress} style={styles.bottomBoxContainer}>
                <Text style={styles.bottomBoxText}>Создать</Text>
              </TouchableOpacity>
        </View>
    );
};

export default AddEventForm;
