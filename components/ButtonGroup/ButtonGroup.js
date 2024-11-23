import {React, useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const ButtonGroup = ({ selectedButton, setSelectedButton }) => {
  const [showImage, setShowImage] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const navigation = useNavigation();

  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar);
  };

  const handleRecommendationsPress = () => {
    setSelectedButton('recommendations');
    navigation.navigate('Recommendations');
  };

  const handleUsersPress = () => {
    setSelectedButton('users');
    navigation.navigate('Users');
  };

  const handleMyEventsPress = () => {
    setSelectedButton('myevents');
    navigation.navigate('MyEvents');
  };

  return (
    <View style={styles.conteiner}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'recommendations' ? { backgroundColor: '#F8936E' } : { backgroundColor: '#ADA5A1' }
          ]}
          onPress={() => {
            handleRecommendationsPress();
            setShowImage(false);
            setShowStatusBar(false);
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>Рекомендации</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button2,
            selectedButton === 'myevents' ? { backgroundColor: '#F8936E' } : { backgroundColor: '#ADA5A1' }
          ]}
          onPress={() => {
            handleMyEventsPress();
            setShowImage(true);
            setShowStatusBar(false);
            console.log('myevents', selectedButton);
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>Мои мероприятия</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'users' ? { backgroundColor: '#F8936E' } : { backgroundColor: '#ADA5A1' }
          ]}
          onPress={() => {
            handleUsersPress();
            setShowImage(false);
            setShowStatusBar(false);
            console.log('users', selectedButton);
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>Пользователи</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button3,
            selectedButton === 'notifications' ? { backgroundColor: '#F8936E' } : { backgroundColor: '#ADA5A1' }
          ]}
          onPress={() => {
            setSelectedButton('notifications');
            setShowImage(false);
            setShowStatusBar(false);
          }}
        >
          <Image
            source={require('../../assets/icons/notification.png')}
            style={styles.notificationStyle}
          />
        </TouchableOpacity>
      </View>
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
              <Text style={styles.statusOption}>Все</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Вы выбрали вариант 2')}>
              <Text style={styles.statusOption}>Созданные мной</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Вы выбрали вариант 3')}>
              <Text style={styles.statusOption}>Хочу посетить</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Вы выбрали вариант 4')}>
              <Text style={styles.lastStatusOption}>Прошедшие</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ButtonGroup;
