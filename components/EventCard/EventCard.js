// src/components/EventCard/EventCard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventCardHeader from './EventCardHeader.js';
import EventCardDetails from './EventCardDetails.js';
import EventCardParticipants from './EventCardParticipants';
import EventCardDate from './EventCardDate.js';
import styles from './styles';

const EventCard = ({ title, description, imageSource }) => {
  return (
    <View style={styles.eventContainer}>
      <EventCardHeader creatorText="T-Bank" rating={4.5} style={styles} />
      <EventCardDetails title={title} description={description} imageSource={imageSource} style={styles} />
      <EventCardParticipants count="1344" style={styles} />
      <EventCardDate date="12.09.2024" style={styles} />
    </View>
  );
};

export default EventCard;