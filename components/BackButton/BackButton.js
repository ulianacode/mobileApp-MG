// src/components/BackButton/BackButton.js
import React from 'react';
import styles from './styles';
import { Image, TouchableOpacity,  } from 'react-native';

const BackButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image source={require('../../assets/icons/backarrow.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BackButton;