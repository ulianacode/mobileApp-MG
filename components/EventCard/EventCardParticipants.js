// src/components/EventCard/EventCardParticipants.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCardParticipants = ({ count, style }) => {
  return (
    <View style={style.iconContainer}>
      <View style={style.iconItem}>
        <Image source={require('../../assets/icons/person_check.png')} style={style.icon} />
        <Text style={[style.iconText, style.interBold]}>{count}</Text>
      </View>
    </View>
  );
};

export default EventCardParticipants;