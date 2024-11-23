// src/components/EventCard/EventCard.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import UserInformation from './UserInformation.js'
import UserRating from './UserRating.js'
import UserAddFriend from './UserAddFriend.js'
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const User = ({ id, imageSource,  name, username, city, rating, friendCheck}) => {
  return (
      <View style={styles.userContainer}>
        <UserInformation imageSource={imageSource} name={name} city={city} username={username} style={styles} />
        <UserRating rating={rating} style={styles} />
        <UserAddFriend friendCheck={friendCheck} style={styles} />
      </View>
  );
};

export default User;