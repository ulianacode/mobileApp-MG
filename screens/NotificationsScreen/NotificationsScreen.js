import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useNavigationState, useFocusEffect } from "@react-navigation/native";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import styles from "./styles";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios"; 

const NotificationsScreen = ({ route }) => {
  const [notificationsData, setNotificationsData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(
    route.params?.selectedButton || "notifications"
  );
  const navigationState = useNavigationState((state) => state);
  const previousScreen = navigationState?.routes[navigationState.index]?.name;

  const fetchNotificationsData = async () => {
    try {
      const { accessToken } = tokens;
      const response = await axios.get(`http://${API_URL}/v1/notifications`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setNotificationsData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных профиля:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchNotificationsData();
    }, [previousScreen])
  );

  useFocusEffect(
    useCallback(() => {
      setSelectedButton(route.params?.selectedButton || "notifications");
    }, [route.params?.selectedButton])
  );


  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={{ flex: 1 }}>
        <ButtonGroup
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        <View style={styles.container}>
       
          <ScrollView>
            {notificationsData.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NotificationsScreen;
