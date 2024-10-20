import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { auth } from '../../variables/ip';

const SearchBar = () => {
  const navigation = useNavigation();

  const handlePeoplePress = () => {
    navigation.navigate('MyProfileEdit');
  };
  const handleEarthPress = () => {
    navigation.navigate('AddingEventCard');
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={handlePeoplePress}>
        <Image source={require('../../assets/icons/people.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEarthPress}>
      <View style={styles.planetContainer}>
              <Image source={require('../../assets/icons/planet.png')} style={styles.icon} />
              <Text style={[styles.cityText, styles.interBold]}>Москва</Text>
        </View>
      </TouchableOpacity>
      <TextInput style={styles.searchInput} />
      <Image source={require('../../assets/icons/search.png')} style={styles.endIcon} />
    </View>
  );
};

export default SearchBar;
