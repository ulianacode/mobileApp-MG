import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";
import styles from "./styles";

const SearchBar = ({
  onCityChange,
  onSearchChange,
  avatarSource,
  citySourse,
  searchQuery,
}) => {
  const navigation = useNavigation();
  const [localCity, setLocalCity] = useState(citySourse);
  const [searchText, setSearchText] = useState(searchQuery);
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    setLocalCity(citySourse);
  }, [citySourse]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://${API_URL}/v1/events/cities`, {
          headers: tokens.accessToken
            ? { Authorization: `Bearer ${tokens.accessToken}` }
            : {},
        });
        const sortedCities = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCities([{ name: "Все" }, ...sortedCities]);
      } catch (error) {
        console.error("Ошибка при получении списка городов:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCitySelection = (selectedCity) => {
    setLocalCity(selectedCity.name);
    setOpen(false);
    if (selectedCity.name !== citySourse) {
      onCityChange(selectedCity.name);
    }
  };

  useEffect(() => {
    setSearchText(searchQuery);
  }, [searchQuery]);

  const toggleDropDown = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSearchInput = (text) => {
    setSearchText(text);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      if (onSearchChange) {
        onSearchChange(text);
      }
    }, 300);

    setTypingTimeout(timeout);
  };

  const resetSearch = () => {
    setOpen(false);
  };

  const navigateToProfile = () => {
    resetSearch();
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={navigateToProfile}>
        <Image source={avatarSource} style={styles.iconUser} />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleDropDown}>
        <View style={styles.planetContainer}>
          <Image
            source={require("../../assets/icons/planet.png")}
            style={styles.icon}
          />
          <Text style={[styles.cityText, styles.interBold]}>{localCity}</Text>
        </View>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropDownPickerContainer}>
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleCitySelection(item)}
              >
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatListStyle}
          />
        </View>
      )}

      <TextInput
        style={[styles.searchInput, { backgroundColor: "#f0f0f0" }]}
        placeholder="Поиск"
        value={searchText}
        onChangeText={handleSearchInput}
        cursorColor="#000"
      />
      <TouchableOpacity onPress={() => onSearchChange(searchText)}>
        <Image
          source={require("../../assets/icons/search.png")}
          style={styles.endIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;