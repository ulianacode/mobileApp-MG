import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserAddFriend = ({ friendCheck, style }) => {
  return (
    <View style={style.actionsContainer}>
        <Image source={require('../../assets/friendsyes.png')} style={style.friendIcon} />
    </View>
  );
};

export default UserAddFriend;