// src/components/EventCard/EventCardParticipants.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCardParticipants = ({ count, style, visibilityStatus }) => {

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
    <View style={style.iconContainer}>
      <View style={style.iconItem}>
        <Image source={require('../../assets/icons/person_check.png')} style={style.icon} />
        <Text style={[style.iconText, style.interBold]}>{count}</Text>
      </View>
      {visibilityIcon && (
        <Image source={visibilityIcon} style={style.visibilityIconDown} />
      )}
    </View>
  );
};

export default EventCardParticipants;