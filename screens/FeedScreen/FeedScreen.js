// src/screens/FeedScreen/FeedScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import SearchBar from '../../components/SearchBar/SearchBar';
import EventCard from '../../components/EventCard/EventCard';
import styles from './styles';

const EventList = () => {
  return (
    <>
      <EventCard
        title="Название мероприятия 1"
        description="Описание мероприятия 1"
        imageSource={require('../../assets/icons/example.png')}
      />
      <EventCard
        title="Название мероприятия 2"
        description="Описание мероприятия 2"
        imageSource={require('../../assets/icons/example.png')}
      />
      <EventCard
        title="Название мероприятия 3"
        description="Описание мероприятия 3"
        imageSource={require('../../assets/icons/example.png')}
      />
      <EventCard
        title="Название мероприятия 4"
        description="Описание мероприятия 4"
        imageSource={require('../../assets/icons/example.png')}
      />
      <EventCard
        title="Название мероприятия 5"
        description="Описание мероприятия 5"
        imageSource={require('../../assets/icons/example.png')}
      />
    </>
  );
};

const FeedScreen = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container} contentInsetAdjustmentBehavior="never">
      <ButtonGroup />
      <SearchBar />
      <EventList />
    </ScrollView>
  );
};

export default FeedScreen;