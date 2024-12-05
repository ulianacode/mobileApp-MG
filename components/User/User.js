import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import UserInformation from './UserInformation';
import UserRating from './UserRating';
import UserAddFriend from './UserAddFriend';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const User = ({ id, imageSource, name, username, city, rating, friendStatus, displayName }) => {
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
          <UserAddFriend friendStatus={friendStatus} username={username} style={styles} displayName={displayName} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default User;
