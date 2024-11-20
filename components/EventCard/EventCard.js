// src/components/EventCard/EventCard.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import EventCardHeader from './EventCardHeader.js';
import EventCardDetails from './EventCardDetails.js';
import EventCardParticipants from './EventCardParticipants';
import EventCardDate from './EventCardDate.js';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const EventCard = ({ id, title, description, imageSource, count, date, creatorText, rating}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('EventCardInsideScreen', { eventId: id });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.eventContainer}>
        <EventCardHeader creatorText={creatorText} rating={rating} style={styles} />
        <EventCardDetails title={title} description={description} imageSource={imageSource} style={styles} />
        <EventCardParticipants count={count} style={styles} />
        <EventCardDate date={date} style={styles} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;