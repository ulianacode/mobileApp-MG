import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

const EventCard = ({ title, description, imageSource }) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }


  return (
    <View style={styles.eventContainer}>
      {/* Верхний блок с информацией о создателе и рейтингом */}
      <EventCardHeader 
        creatorText="T-Bank" 
        rating={4.5} 
        style={styles} 
      />

      {/* Блок с информацией о мероприятии */}
      <EventCardDetails 
        title={title} 
        description={description} 
        imageSource={imageSource} 
        style={styles} 
      />

      {/* Блок с количеством участников */}
      <EventCardParticipants 
        count="1344" 
        style={styles} 
      />

      {/* Блок с датой мероприятия */}
      <EventCardDate date="12.09.2024" style={styles} />
    </View>
  );
};

// Оценка мероприятия
const EventCardHeader = ({ creatorText, rating, style }) => {
  return (
    <View style={style.backgroundEventContainer}>
      <Text style={[style.creatorText, style.interBold]}>{creatorText}</Text>
      <View style={style.ratingContainer}>
        <Image source={require('./icons/star.png')} style={style.starIcon} />
        <Text style={[style.starsText, style.interBold]}>{rating}</Text>
      </View>
    </View>
  );
};

// Информация о мероприятии
const EventCardDetails = ({ title, description, imageSource, style }) => {
  return (
    <View style={style.eventDetails}>
      <View style={style.textContainer}>
        <View style={style.textBackground}>
          <Text style={[style.eventTitle, style.interBold]} numberOfLines={2} ellipsizeMode="tail">{title}</Text> 
          <Text style={[style.eventDescription, style.interRegular]} numberOfLines={3} ellipsizeMode="tail">{description}</Text> 
        </View>
      </View>
      <Image source={imageSource} style={style.eventImage} />
    </View>
  );
};
// Количество участников
const EventCardParticipants = ({ count, style, onPress }) => {
  return (
    <View style={style.iconContainer}>
      <View style={style.iconItem}>
          <Image source={require('./icons/person_check.png')} style={style.icon} />
        <Text style={[style.iconText, style.interRegular]}>{count}</Text>
      </View>
    </View>
  );
};

// Дата мероприятия
const EventCardDate = ({ date, style }) => {
  return (
    <View style={style.dateContainer}>
      <Text style={[style.dateText, style.interBold]}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    height: 220,
    width: '100%',
    borderRadius: 10,
    marginBottom: -20,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 60,
  },
  eventDetails: {
    backgroundColor: '#F26430',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    marginTop: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textBackground: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    top: -30,
  },
  eventImage: {
    width: 140,
    height: '100%',
    resizeMode: 'contain',
  },
  eventTitle: {
    fontSize: 16,
    color: '#000000',
    numberOfLines: 2,
    ellipsizeMode: 'tail',
  },
  eventDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    numberOfLines: 3,
    top: 35,
    ellipsizeMode: 'tail',
  },
  backgroundEventContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#F8936E',
    height: 100,
    width: '100%',
    borderRadius: 10,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creatorText: {
    color: '#FFFFFF',
    fontSize: 14,
    position: 'absolute',
    top: 7,
    left: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 7,
    left: 375,
  },
  starsText: {
    color: '#FFFFFF',
    fontSize: 14,
    right: 10,
  },
  starIcon: {
    width: 15,
    height: 15,
    right: 15,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    left: -160,
  },
  iconContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  dateContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  interRegular: {
    fontFamily: 'Inter_400Regular',
  },
});

export default EventCard;

  
