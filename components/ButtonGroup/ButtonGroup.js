// src/components/ButtonGroup/ButtonGroup.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './styles';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState('recommendations');
  const [showImage, setShowImage] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);

  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar);
  };

  const handleRecommendationsPress = () => {
    navigation.navigate('Recommendations');
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
            handleRecommendationsPress;
            setSelectedButton('recommendations');
            setShowImage(false);
            setShowStatusBar(false);
        }}
    >
        <Text style={[styles.buttonText, styles.interBold]}>Рекомендации</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
        style={[
          styles.button2,
          selectedButton === 'myEvents' ? { backgroundColor: '#F8936E' } : { backgroundColor: '#ADA5A1' }
        ]}
        onPress={() => {
          setSelectedButton('myEvents');
          setShowImage(true);
        }}
    >
      <Text style={[styles.buttonText, styles.interBold]}>Мои мероприятия</Text>
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