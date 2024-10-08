// src/components/EventCard/EventCardDate.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventCardDate = ({ date, style }) => {
  return (
    <View style={style.dateContainer}>
      <Text style={[style.dateText, style.interBold]}>{date}</Text>
    </View>
  );
};

export default EventCardDate;