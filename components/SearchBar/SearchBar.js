import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';
import styles from './styles';

const SearchBar = ({ onCityChange, onSearchChange }) => {
  const navigation = useNavigation();
  const [city, setCity] = useState('Москва');
  const [searchText, setSearchText] = useState(''); 
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://${API_URL}:8083/v1/events/cities`, {
          headers: tokens.accessToken ? { Authorization: `Bearer ${tokens.accessToken}` } : {},
        });
        const sortedCities = response.data.sort((a, b) => a.localeCompare(b));
        setCities(['Все', ...sortedCities]);
      } catch (error) {
        console.error('Ошибка при получении списка городов:', error);
      }
    };

    fetchCities();
  }, []);

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setOpen(false);
    onCityChange(selectedCity);
  };

  const toggleDropDown = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSearchPress = () => {
    onSearchChange(searchText); 
  };
 
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <Image source={require('../../assets/icons/people.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleDropDown}>
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
        placeholder="Поиск мероприятий"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity onPress={handleSearchPress(searchText)}> 
        <Image source={require('../../assets/icons/search.png')} style={styles.endIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
