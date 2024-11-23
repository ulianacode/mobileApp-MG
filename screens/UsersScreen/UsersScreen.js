import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import SearchBar from '../../components/SearchBar/SearchBar';
import User from '../../components/User/User';
import styles from './styles';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';

const UsersScreen = ({ route }) => {
  const [showImage, setShowImage] = useState(true);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [selectedButton, setSelectedButton] = useState(route.params?.selectedButton || 'users');

  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar);
  };
  useFocusEffect(
    useCallback(() => {
      setSelectedButton(route.params?.selectedButton || 'users');
    }, [route.params?.selectedButton])
  );
  const name = "Иван Иванов";
  const city = "Воронеж";
  const username = "@logiin";

  return (
    <View style={styles.container}>
      <ButtonGroup selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      <SearchBar />
      <User
        id={1}
        name={name}
        imageSource={require('../../assets/account_circle_user.png')}
        city={city}
        username={username}
        rating={10}
        friendCheck={3}
      />
      <View style={styles.conteinerStatusBar}>
        {showImage && (
          <TouchableOpacity onPress={handleMenuPress}>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        )}
        {showStatusBar && (
          <View style={styles.statusBar}>
            <TouchableOpacity onPress={() => alert('Вы выбрали вариант 1')}>
              <Text style={styles.statusOption}>Друзья</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default UsersScreen;
