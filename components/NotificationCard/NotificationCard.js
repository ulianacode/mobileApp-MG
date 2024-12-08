import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL, tokens } from "../../variables/ip";
import styles from "./styles";

const months = [
  "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

const NotificationCard = ({ notification }) => {
  const [isRead, setIsRead] = useState(notification.isRead);
  const navigation = useNavigation();

  const markAsRead = async (notificationId) => {
    try {
      const { accessToken } = tokens;

      await axios.put(
        `http://${API_URL}/v1/notifications`, 
        {},
        {
          params: {
            notificationIds: notificationId,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setIsRead(true); 
    } catch (error) {
      console.error('Ошибка при обновлении статуса уведомления:', error);
    }
  };

  const handlePress = () => {
    if (!isRead) {
      markAsRead(notification.id);
      console.log(notification.id)
    }
    navigation.navigate('NotificationsCardInsideScreen', { notificationId: notification.id });
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const firstSentence = notification.message?.split(/[.!]/)[0] || "";
  const truncatedMessage = truncateText(firstSentence, 30); 

  const formatDate = (dateString) => {
    const [datePart, timePart] = dateString.split(' '); 
    const [day, month, year] = datePart.split('.'); 

    const date = new Date(`${year}-${month}-${day}T${timePart}`);
    const monthName = months[date.getMonth()]; 
    const hours = date.getHours(); 
    const minutes = date.getMinutes(); 

    return `${day} ${monthName} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <View style={styles.titleAndDescriptionContainer}>
          <View style={styles.titleContainer}>
            {isRead === false && (
              <Image
                source={require("../../assets/point.png")}
                style={styles.imageStyle}
              />
            )}
            <Text style={styles.title} numberOfLines={1}>
              {truncatedMessage}
            </Text>
          </View>
          <Text style={styles.description} numberOfLines={1}>
            {notification.message}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(notification.date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
