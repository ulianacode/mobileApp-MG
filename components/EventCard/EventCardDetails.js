// src/components/EventCard/EventCardDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCardDetails = ({ title, description, imageSource, style }) => {
  return (
    <View style={style.eventDetails}>
    <View style={style.textContainer}>
      <View style={style.titleContainer}>
        <View style={style.textBackground}>
          <Text style={[style.eventTitle, style.interBold]} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
        </View>
      </View>
      
      <View style={style.descriptionContainer}>
        <Text style={[style.eventDescription, style.interBold]} numberOfLines={3} ellipsizeMode="tail">{description}</Text>
      </View>
    </View>
    
    <Image source={imageSource} style={style.eventImage} />
  </View>
  );
};

export default EventCardDetails;