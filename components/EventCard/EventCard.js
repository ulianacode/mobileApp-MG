// src/components/EventCard/EventCard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventCardHeader from './EventCardHeader.js';
import EventCardDetails from './EventCardDetails.js';
import EventCardParticipants from './EventCardParticipants';
import EventCardDate from './EventCardDate.js';
import styles from './styles';

const EventCard = ({ title, description, imageSource, count, date, creatorText, rating}) => {
  return (
    <View style={styles.eventContainer}>
      <EventCardHeader creatorText={creatorText} rating={rating} style={styles} />
      <EventCardDetails title={title} description={description} imageSource={imageSource} style={styles} />
      <EventCardParticipants count={count} style={styles} />
      <EventCardDate date={date} style={styles} />
    </View>
  );
};

export default EventCard;