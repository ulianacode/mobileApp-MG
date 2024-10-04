import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import EventCard from './Event'; 
import { StatusBar } from 'expo-status-bar';
     

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showImage, setShowImage] = useState(false); 
  const [showStatusBar, setShowStatusBar] = useState(false); 
  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar); 
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={[
          styles.button1, 
          selectedButton === 'recommendations' ? { backgroundColor: '#F8936E' } : selectedButton === 'myEvents' ? { backgroundColor: 'gray' } : {}
        ]} 
        onPress={() => {
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
          selectedButton === 'myEvents' ? { backgroundColor: '#F8936E' } : selectedButton === 'recommendations' ? { backgroundColor: 'gray' } : {}
        ]} 
        onPress={() => {
          setSelectedButton('myEvents');
          setShowImage(true); 
        }}
      >
        <Text style={[styles.buttonText, styles.interBold]}>Мои мероприятия</Text>
      </TouchableOpacity>

      {showImage && (
            <TouchableOpacity onPress={handleMenuPress}>
                <Image 
                  source={require('./icons/menu.png')} 
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
                  <Text style={styles.statusOption}>Прошедшие</Text>
                </TouchableOpacity>
            </View>
            )}
</View>
);
};


const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('./icons/people.png')} style={styles.icon} />
      <View style={styles.planetContainer}>
        <Image source={require('./icons/planet.png')} style={styles.icon} />
        <Text style={[styles.cityText, styles.interBold]}>Москва</Text>
      </View>
      <TextInput style={styles.searchInput} />
      <Image source={require('./icons/search.png')} style={styles.endIcon} /> 
    </View>
  );
};

const EventList = () => {
  return (
    <>
      <EventCard 
        title="Название мероприятия 1" 
        description="Описание мероприятия 1" 
        imageSource={require('./icons/example.png')} 
      />
      <EventCard 
        title="Название мероприятия 2" 
        description="Описание мероприятия 2" 
        imageSource={require('./icons/example.png')} 
      />
      <EventCard 
        title="Название мероприятия 3" 
        description="Описание мероприятия 3" 
        imageSource={require('./icons/example.png')} 
      />
      <EventCard 
        title="Название мероприятия 4" 
        description="Описание мероприятия 4" 
        imageSource={require('./icons/example.png')} 
      />
      <EventCard 
        title="Название мероприятия 5" 
        description="Описание мероприятия 5" 
        imageSource={require('./icons/example.png')} 
      />
      <EventCard 
        title="Название мероприятия 6" 
        description="Описание мероприятия 6" 
        imageSource={require('./icons/example.png')} 
      />
    </>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <ButtonGroup />
      <SearchBar />
      <EventList />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: 'relative', 
  },
  searchContainer: {
    top: 60,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  planetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40, 
    left: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#FBF6F4',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 40,
    borderColor: '#FBF6F4',
  },
  endIcon: {
    width: 30, 
    height: 30, 
    marginLeft: 5, 
    right: 45,
  },
  buttonContainer: {
    top: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button1: {
    flex: 1, 
    backgroundColor: '#F8936E', 
    marginRight: 0, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  button2: {
    flex: 1,
    backgroundColor: '#ADA5A1', 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  cityText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 10,
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  imageStyle: {
    width: 40,
    height: 40, 
    top: 10,
    marginRight: -2,
  },
  statusBar: {
    position: 'absolute',
    top: 50,
    left: 280,
    zIndex: 1,
    backgroundColor: '#FBF6F4',
    borderColor: '#000000',
    border: '1rem solid',
    borderRadius: 0,
    textAlign: 'end',
  },
  statusOption: {
    borderColor: '#000000',
    textAlign: 'end',
  },
});