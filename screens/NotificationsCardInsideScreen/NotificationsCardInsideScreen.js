import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";


const NotificationsCardInsideScreen = () => {
  const route = useRoute();
  const notificationId = route.params?.notificationId;
  const [notificationsData, setNotificationsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  const months = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];

  const handleBackPress = () => {
    navigation.navigate("Notifications");
  };

  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        `http://${API_URL}/v1/notifications/${notificationId}`,
        {
          headers: tokens.accessToken
            ? { Authorization: `Bearer ${tokens.accessToken}` }
            : {},
        }
      );

      setNotificationsData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных уведомления", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [notificationId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!notificationsData) {
    return (
      <View style={styles.container}>
        <BackButton onPress={handleBackPress} />
        <Text>Данные уведомления не найдены.</Text>
      </View>
    );
  }

  const firstSentence = notificationsData.message?.split(/[.!]/)[0] || "";
  
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
    <View style={styles.container}>
      <BackButton onPress={handleBackPress} />
      <View style={styles.contentContainer}>
        <View style={styles.dateAndMessageContainer}>
          <Text style={styles.date}>{formatDate(notificationsData.date)}</Text>
          <Text style={styles.messageTitle}>{firstSentence}</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.messageD}>{notificationsData.message}</Text>
      </View>
    </View>
  );
};

export default NotificationsCardInsideScreen;
