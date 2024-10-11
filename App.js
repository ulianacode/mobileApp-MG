// src/App.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display LoadingScreen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed" screenOptions= {{headerShown: false}}>
            <Stack.Screen name="Feed" component={FeedScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
