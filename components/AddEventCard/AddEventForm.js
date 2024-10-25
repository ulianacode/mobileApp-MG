import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'; 
import styles from './styles';
import { API_URL, tokens } from '../../variables/ip';



const AddEventForm = () => {
    const [title, setEventName] = useState('');
    const [startDateTime, setStartDate] = useState('');
    const [endDateTime, setEndDate] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [eventImage, setEventImage] = useState(null); 

    const handleCreateEvent = async () => {
        if (!startDateTime || !endDateTime || !address || !description) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля.');
            return;
        }

        try {
            const response = await axios.post(`http://${API_URL}:8083/v1/events`, 
                { title,
                startDateTime,  
                endDateTime,     
                address,
                description,
                eventImage
            }, {
                headers: {
                    Authorization: `Bearer ${tokens.accessToken}`,
                },
            });

            if (response.status === 200) {
                Alert.alert('Успешно', 'Событие обновлено!');
                setEventName('');
                setStartDate('');
                setEndDate('');
                setAddress('');
                setDescription('');
                setEventImage(null); 
            } else {
                Alert.alert('Ошибка', 'Не удалось обновить событие.');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Произошла ошибка при отправке данных.');
        }
    };

    return (
        <View style={styles.boxContainer}>
            {[
                { label: 'Название *', value: title, setter: setEventName },
                { label: 'Дата начала (ДД.ММ.ГГГГ чч:мм) *', value: startDateTime, setter: setStartDate },
                { label: 'Дата конца (ДД.ММ.ГГГГ чч:мм) *', value: endDateTime, setter: setEndDate },
                { label: 'Адрес *', value: address, setter: setAddress },
                { label: 'Описание', value: description, setter: setDescription },
            ].map((field, index) => (
                <View key={index} style={styles.fieldContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>{field.label}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            maxLength={24}
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.setter}
                        />
                    </View>
                    <View style={styles.line} />
                </View>
            ))}

            <TouchableOpacity onPress={() => Alert.alert('Загрузка изображения')} style={styles.loginLinkContainer}>
                <View style={styles.labelPhotoContainer}>
                    <Image source={require('../../assets/photosend.png')} style={styles.miniicon} />
                    <Text style={styles.label}>Загрузить изображение</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateEvent} style={styles.bottomBoxContainer}>
                <Text style={styles.bottomBoxText}>Создать</Text>
            </TouchableOpacity>
        </View>
    );
};
export default AddEventForm;