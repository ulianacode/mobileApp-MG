// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('../../assets/icons/people.png')} style={styles.icon} />
      <View style={styles.planetContainer}>
        <Image source={require('../../assets/icons/planet.png')} style={styles.icon} />
        <Text style={[styles.cityText, styles.interBold]}>Москва</Text>
      </View>
      <TextInput style={styles.searchInput} />
      <Image source={require('../../assets/icons/search.png')} style={styles.endIcon} />

      
    </View>
  );
};

export default SearchBar;