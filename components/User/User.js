// src/components/EventCard/EventCard.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import UserInformation from './UserInformation.js'
import UserRating from './UserRating.js'
import UserAddFriend from './UserAddFriend.js'
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const User = ({ id, imageSource,  name, username, city, rating, friendStatus}) => {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Profile', { username: username });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.userContainer}>
        <UserInformation imageSource={imageSource} name={name} city={city} username={username} style={styles} />
        <View style={styles.rightContainer}>
          <UserRating rating={rating} style={styles} />
          <UserAddFriend friendStatus={friendStatus} username={username} style={styles} />
        </View>
      </View>
      </TouchableOpacity>
  );
};

export default User;