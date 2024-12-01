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
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./styles";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          imageSource={{ uri: event.eventImage }}
          count={event.approvalCount}
          date={event.startDateTime}
          creatorText={event.userProfile.username}
          rating={event.userProfile.averageRating}
          city={event.city.name}
          visibilityStatus={event.visibilityStatus}
        />
      ))}
    </>
  );
};

const MyEvents = ({ route }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState("");
  const [selectedCity, setSelectedCity] = useState("Все");
  const [selectedButton, setSelectedButton] = useState(
    route.params?.selectedButton || "myevents"
  );
  const navigationState = useNavigationState((state) => state);
  const previousScreen = navigationState?.routes[navigationState.index]?.name;

  const fetchUserData = async () => {
    try {
      const { username, accessToken } = tokens;

      if (!username || !accessToken) {
        setUserData({
          profileImage: "",
          city: "Москва",
        });
        return;
      }

      const response = await axios.get(
        `http://${API_URL}/v1/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setUserData(response.data);
      if (previousScreen === "Login") {
        setSelectedCity(response.data.city);
      }
    } catch (error) {
      console.error("Ошибка при получении данных профиля:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [previousScreen])
  );

  useFocusEffect(
    useCallback(() => {
      setSelectedButton(route.params?.selectedButton || "myevents");
    }, [route.params?.selectedButton])
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const avatarSource =
    userData.profileImage && userData.profileImage !== ""
      ? { uri: userData.profileImage }
      : require("../../assets/account_circle.png");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={{ flex: 1 }}>
        <ButtonGroup
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <SearchBar
          onCityChange={handleCityChange}
          onSearchChange={handleSearch}
          avatarSource={avatarSource}
          citySourse={selectedCity}
          searchQuery={searchQuery}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MyEvents;
