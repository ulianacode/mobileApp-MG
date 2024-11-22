import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserRating = ({ rating, style }) => {
  return (
    <View style={style.actionsContainer}>
        <View style={style.ratingContainer}>
        <Image source={require('../../assets/icons/blackstar.png')} style={style.starIcon} />
        <Text style={[style.ratingText, style.interBold]}>{rating}</Text>
        </View>
    </View>
  );
};

export default UserRating;