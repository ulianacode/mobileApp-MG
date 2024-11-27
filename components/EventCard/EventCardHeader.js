// src/components/EventCard/EventCardHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCardHeader = ({ creatorText, rating, city, visibilityStatus, style }) => {

  const getVisibilityIcon = () => {
    if (visibilityStatus === 'FRIENDS_ONLY') {
      return require('../../assets/icons/friendsOnly.png');
    } else if (visibilityStatus === 'CLOSED') {
      return require('../../assets/icons/closed.png');
    }
    return null;
  };

  const visibilityIcon = getVisibilityIcon();

  return (
    <View style={style.backgroundEventContainer}>
      <Text style={[style.creatorText, style.interBold]}>{creatorText}</Text>
      {visibilityIcon && (
        <Image source={visibilityIcon} style={style.visibilityIcon} />
      )}
      <Text style={[style.cityText, style.interBold]}>{city}</Text>
      <View style={style.ratingContainer}>
        <Image source={require('../../assets/whiteStar.png')} style={style.starIcon} />
        <Text style={[style.starsText, style.interBold]}>{rating}</Text>
      </View>
    </View>
  );
};

export default EventCardHeader;