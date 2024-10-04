// src/screens/LoadingScreen/LoadingScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from './styles';

const LoadingScreen = () => {
  console.log("LoadingScreen executed");
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo_v2.png')}
        style={styles.image}
      />
    </View>
  );
};

export default LoadingScreen;