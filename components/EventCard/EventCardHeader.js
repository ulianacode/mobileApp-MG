// src/components/EventCard/EventCardHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCardHeader = ({ creatorText, rating, style }) => {
  return (
    <View style={style.backgroundEventContainer}>
      <Text style={[style.creatorText, style.interBold]}>{creatorText}</Text>
      <View style={style.ratingContainer}>
        <Image source={require('../../assets/whiteStar.png')} style={style.starIcon} />
        <Text style={[style.starsText, style.interBold]}>{rating}</Text>
      </View>
    </View>
  );
};

export default EventCardHeader;