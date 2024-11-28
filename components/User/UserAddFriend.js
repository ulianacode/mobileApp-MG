import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

const UserAddFriend = ({ friendStatus, style }) => {
  let iconSource;
  if (friendStatus === 'SEND') {
    iconSource = require('../../assets/friendsend.png'); 
  } else if (friendStatus === 'FRIENDS') {
    iconSource = require('../../assets/friendsyes.png');
  } else if (friendStatus === 'NOT_FRIENDS') {
    iconSource = require('../../assets/friendno.png');
  } 


  const handlePress = () => {
    alert('AAAAAAAAAAAAA');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={style.actionsContainer}>
      <Image source={iconSource} style={style.friendIcon} />
    </View>
    </TouchableOpacity>

  );
};

export default UserAddFriend;
