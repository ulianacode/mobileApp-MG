import React from 'react';
import styles from './styles';
import { Image, TouchableOpacity,  } from 'react-native';

const ExitButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image source={require('../../assets/exit.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ExitButton;