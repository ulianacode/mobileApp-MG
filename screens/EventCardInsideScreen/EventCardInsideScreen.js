import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigation } from '@react-navigation/native';
import { API_URL, tokens} from '../../variables/ip';

const EventCardInsideScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);
    const [ratingSubmitted, setRatingSubmitted] = useState(false);
    const [participantStatus, setParticipantStatus] = useState(1); 
    const eventStartDate = new Date('2022-10-04T20:12:00');
    const eventEndDate = new Date('2024-10-04T22:00:00');
    const currentDate = new Date('2025-10-04T22:00:00');

    

    const handleChatPress = () => {
        Alert.alert('Чат');
    };

    const handleRatingPress = (star) => {
        setRating(star);
    };

    const handleBackPress = () => {
        navigation.navigate('Feed');
    };

    const handleOkRatingPress = () => {
        submitRating(); 
    };

    const handleParticipationToggle = () => {
        const newStatus = isChecked ? 2 : 1;
        setIsChecked(!isChecked);
        setParticipantStatus(newStatus);
    };

    

    useEffect(() => {
        const fetchEventData  = async () => {
            try {
                const accessToken = tokens.accessToken;


                console.log('Access Token:', accessToken);
    

                const response = await axios.get(`http://${API_URL}:8083/v1/events/3`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    },
                }); 
            } catch (error) {
                console.error('Ошибка при получении данных мероприятия', error);
            }
        };

        fetchEventData();
    }, []); 

        const submitRating = async () => {
            try {
                const accessToken = tokens.accessToken;
                const eventId = 4;
                const score = rating;
                console.log(score);

                const response = await axios.post(`http://${API_URL}:8082/v1/grades`, 
                    { eventId, score}, 
                    {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log('Рейтинг успешно отправлен:', response.data);
                setRatingSubmitted(true);
            } catch (error) {
                console.error('Ошибка при отправке рейтинга:', error);
            }
        };


    let headerText = '';
    let headerBackgroundColor = '#D9D9D9'; 

    if (eventStartDate > currentDate) {
        headerText = 'Ещё не началось';
        headerBackgroundColor = '#D9D9D9';
    } else if (eventStartDate <= currentDate && eventEndDate >= currentDate) {
        headerText = 'Идёт сейчас';
        headerBackgroundColor = '#F26430';
    } else if (eventEndDate < currentDate) {
        headerText = 'Уже закончилось';
        headerBackgroundColor = '#ADA5A1';
    }

    return (
        <ScrollView style={styles.container}>
            
            <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
                <Text style={styles.headerText}>{headerText}</Text>
            </View>

            <BackButton onPress={handleBackPress} />

            <View style={styles.dater}>
                <Text style={styles.dateText}>4 Октября 20:00 - 4 Октября 22:00</Text>
            </View>

            <View style={styles.namer}>
                <Text style={styles.title}>Название мероприятия</Text>
            </View>

            <View style={styles.imagesContainer}>
                <Image source={require('../../assets/icons/example.png')} style={styles.image} />
                <Image source={require('../../assets/icons/example.png')} style={styles.image} />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoNumAndRating}>
                    <View style={styles.infoNum}>
                        <Image source={require('../../assets/aprove.png')} style={styles.miniicon} />
                        <Text style={styles.infoTextAprove}>1,923</Text>
                    </View>
                    <View style={styles.infoRating}>
                        <Image source={require('../../assets/aprove.png')} style={styles.miniicon} />
                        <Text style={styles.infoTextRating}>{rating.toFixed(1)}</Text>
                    </View>
                </View>
                <View style={styles.infoTitle}>
                    <Image source={require('../../assets/logoevent.png')} style={styles.miniicontitle} />
                    <Text style={styles.infoTextTitle}>T-BANK</Text>
                </View>
            </View>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur...Lorem ipsum dolor sit amet consectetur......
            </Text>

         
            {eventStartDate > currentDate && (
                <View style={styles.participationContainer}>
                    <Pressable onPress={handleParticipationToggle} style={styles.checkboxContainer}>
                        <Text style={styles.label}>Участвую</Text>
                        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                            {isChecked && <Text style={styles.checkboxText}>✔</Text>}
                        </View>
                    </Pressable>
                </View>
            )}

            
            {eventStartDate <= currentDate && eventEndDate >= currentDate && participantStatus === 1 && (
                <View style={styles.participationContainer}>
                <Pressable onPress={handleParticipationToggle} style={styles.checkboxContainer}>
                    <Text style={styles.label}>Участвую</Text>
                    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                        {isChecked && <Text style={styles.checkboxText}>✔</Text>}
                    </View>
                </Pressable>
                <TouchableOpacity onPress={handleChatPress} style={styles.chatContainer}>
                    <Image source={require('../../assets/icons/chat.png')} style={styles.chatIcon} />
                </TouchableOpacity>
            </View>
            )}

        
            {eventStartDate <= currentDate && eventEndDate >= currentDate && participantStatus === 2 && (
                <View style={styles.nonParticipationContainer}> 
                    <Text style={styles.nonParticipationText}>Вы не участвуете</Text>
                </View>
            )}

            {eventEndDate < currentDate && participantStatus === 1 && !ratingSubmitted && (
                <View style={styles.ratingAndOkContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>Оцените мероприятие:</Text>
                        <View style={styles.starsContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => handleRatingPress(star)}>
                                    <Image
                                        source={
                                            star <= rating
                                                ? require('../../assets/icons/starfill.png')
                                                : require('../../assets/icons/star.png')
                                        }
                                        style={styles.star}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleOkRatingPress} style={styles.starOkContainer}>
                        <Image source={require('../../assets/icons/ok.png')} style={styles.starOkIcon} />
                    </TouchableOpacity>
                </View>
            )}

            {eventEndDate < currentDate && participantStatus === 1 && ratingSubmitted && (
                <View style={styles.ratingDisplayContainer}>
                    <Text style={styles.ratingText}>Ваша оценка:</Text>
                    <View style={styles.singleStarContainer}>
                        <Image
                            source={require('../../assets/icons/starfill.png')}
                            style={styles.singleStar}
                        />
                        <Text style={styles.ratingNumber}>{rating}</Text>
                    </View>
                </View>
            )}

            {eventEndDate < currentDate && participantStatus === 2 && (
                <View style={styles.nonParticipationContainer}> 
                    <Text style={styles.nonParticipationText}>Вы не участвовали</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default EventCardInsideScreen;
