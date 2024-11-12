import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';
import styles from './styles';

const SearchBar = ({ setIsCitiesOpen }) => {
  const navigation = useNavigation();
  const [city, setCity] = useState('Москва');
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  const handlePeoplePress = () => {
    navigation.navigate('MyProfile');
  };

  const handleEarthPress = () => {
    navigation.navigate('EventCardInsideScreen');
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://${API_URL}:8083/v1/events/cities`, {
          headers: tokens.accessToken ? { Authorization: `Bearer ${tokens.accessToken}` } : {},
        });
        const sortedCities = response.data.sort((a, b) => a.localeCompare(b));
        setCities(sortedCities);
      } catch (error) {
        console.error('Ошибка при получении списка городов:', error);
      }
    };

    fetchCities();
  }, []);

  const handleCitySelection = (city) => {
    setCity(city);
    setOpen(false);
    setIsCitiesOpen(false);
  };

  const handlePlanetPress = () => {
    setOpen(prevState => !prevState);
    setIsCitiesOpen(prevState => !prevState);
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={handlePeoplePress}>
        <Image source={require('../../assets/icons/people.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePlanetPress}>
        <View style={styles.planetContainer}>
          <Image source={require('../../assets/icons/planet.png')} style={styles.icon} />
          <Text style={[styles.cityText, styles.interBold]}>{city}</Text>
        </View>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropDownPickerContainer}>
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handleCitySelection(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatListStyle}
          />
        </View>
      )}

      <TextInput
        style={[styles.searchInput, { backgroundColor: '#f0f0f0' }]}
      />
      <Image source={require('../../assets/icons/search.png')} style={styles.endIcon} />
    </View>
  );
};


export default SearchBar;