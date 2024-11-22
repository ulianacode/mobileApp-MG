import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './styles';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';

const MyEvents = ({ route }) => {
  const [selectedButton, setSelectedButton] = useState(route.params?.selectedButton || 'myevents');
  useFocusEffect(
    useCallback(() => {
      setSelectedButton(route.params?.selectedButton || 'myevents');
    }, [route.params?.selectedButton])
  );
  return (
    <View style={styles.container}>
      <ButtonGroup selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      <SearchBar />
    </View>
  );
};

export default MyEvents;
