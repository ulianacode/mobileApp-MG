import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useNavigationState, useFocusEffect } from "@react-navigation/native";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import User from "../../components/User/User";
import styles from "./styles";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.username}
          id={user.id}
          name={user.displayName || user.username}
          imageSource={{
            uri: user.profileImage || "../../assets/account_circle_user.png",
          }}
          city={user.city || "Не указан"}
          username={user.username || "Не указан"}
          rating={
            Number.isInteger(user.averageRating)
              ? `${user.averageRating}.0`
              : user.averageRating
          }
          friendStatus={user.friendStatus}
          displayName={user.displayName}
        />
      ))}
    </>
  );
};

const UsersScreen = (route) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState("");
  const [selectedCity, setSelectedCity] = useState("Все");
  const [selectedButton, setSelectedButton] = useState(
    route.params?.selectedButton || "users"
  );
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [showStatusBar, setShowStatusBar] = useState(false);
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

  const fetchAllUsers = async () => {
    setLoading(true);
    setUsers([]);
    let allUsers = [];
    let page = 0;
    let hasMore = true;

    try {
      while (hasMore) {
        console.log(`Fetching page: ${page}`);
        const response = await axios.post(
          `http://${API_URL}/v1/users/feed`,
          {
            cityName: selectedCity,
            searchQuery: searchQuery,
            feedType: selectedFilter,
          },
          {
            params: {
              page: page,
              size: 15,
            },
            headers: tokens.accessToken
              ? { Authorization: `Bearer ${tokens.accessToken}` }
              : {},
          }
        );

        const data = response.data.content || [];
        allUsers = [...allUsers, ...data];
        hasMore = data.length > 0;
        page += 1;
      }

      setUsers(allUsers);
    } catch (error) {
      console.error("Ошибка загрузки пользователей:", error.message);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      } else if (error.request) {
        console.log("No response received:", error.request);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [searchQuery, selectedCity, selectedFilter]);

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
      setSelectedButton(route.params?.selectedButton || "users");
    }, [route.params?.selectedButton, previousScreen])
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setShowStatusBar(false);
  };

  useEffect(() => {
    fetchAllUsers();
  }, [selectedFilter]);

  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar);
  };

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const avatarSource =
    userData.profileImage && userData.profileImage !== ""
      ? { uri: userData.profileImage }
      : require("../../assets/account_circle.png");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={{ flex: 1 }}>
      <ButtonGroup selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
        <View style={styles.searchBarContainer}>
          <SearchBar
            onCityChange={handleCityChange}
            onSearchChange={handleSearch}
            avatarSource={avatarSource}
            citySourse={selectedCity}
            searchQuery={searchQuery}
          />
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Image
              source={require("../../assets/icons/menu.png")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          {showStatusBar && (
            <View style={styles.containerStatusBar}>
              <View style={styles.statusBar}>
                <TouchableOpacity onPress={() => handleFilterChange("ALL")}>
                  <Text
                    style={[
                      styles.statusOption,
                      selectedFilter === "ALL" && styles.selectedStatusOption,
                    ]}
                  >
                    Все
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleFilterChange("FRIENDS")}>
                  <Text
                    style={[
                      styles.statusOption,
                      selectedFilter === "FRIENDS" &&
                        styles.selectedStatusOption,
                    ]}
                  >
                    Друзья
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFilterChange("SENT_BY_ME")}
                >
                  <Text
                    style={[
                      styles.statusOption,
                      selectedFilter === "SENT_BY_ME" &&
                        styles.selectedStatusOption,
                    ]}
                  >
                    Отправленные мной
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleFilterChange("SENT_TO_ME")}
                >
                  <Text
                    style={[
                      styles.statusOption,
                      selectedFilter === "SENT_TO_ME" &&
                        styles.selectedStatusOption,
                    ]}
                  >
                    Отправленные мне
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <UserList users={users} />
              {users.length === 0 && !loading && (
                <View style={styles.noUsersContainer}>
                  <Text style={styles.noUsersText}>
                    В этом городе нет пользователей
                  </Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UsersScreen;
