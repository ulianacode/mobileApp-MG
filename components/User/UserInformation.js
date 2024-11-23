import React from 'react';
import { View, Text, Image } from 'react-native';

const UserInformation = ({ imageSource, name, city, username, style }) => {
  return (
    <View style={style.informationContainer}>
      <Image source={imageSource} style={style.imageStyle} />
      <View style={style.nameAndCityContainer}>
      <View style={style.nameContainer}>
        <Text style={[style.nameText, style.interBold]}>{name}</Text>
        <Text style={[style.userNameText, style.interBold]}>{username}</Text>
        </View>
        <Text style={[style.cityText, style.interRegular]}>{city}</Text>
      </View>
    </View>
  );
};

export default UserInformation;
