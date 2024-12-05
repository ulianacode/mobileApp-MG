import React from 'react';
import { View, Text, Image } from 'react-native';

const UserRating = ({ rating, style }) => {
  return (
    <View style={style.ratingContainer}>
      <Image source={require('../../assets/icons/blackstar.png')} style={style.starIcon} />
      <Text style={[style.ratingText, style.interBold]}>{rating}</Text>
    </View>
  );
};

export default UserRating;
