import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import MyProfileScreen from './screens/MyProfileScreen/MyProfileScreen';
import MyProfileEdit from './screens/MyProfileEdit/MyProfileEdit';
import { auth } from './variables/ip';
import AddingEventCard from './screens/AddingEventCard/AddingEventCard';
import EventCardInsideScreen from './screens/EventCardInsideScreen/EventCardInsideScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import UsersScreen from './screens/UsersScreen/UsersScreen';
import RecommendationsScreen from './screens/RecommendationsScreen/RecommendationsScreen';
import MyEventsScreen from './screens/MyEventsScreen/MyEvents';
import {TextEncoder} from 'text-encoding';

global.TextEncoder = TextEncoder;

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
          <Stack.Navigator initialRouteName="Recommendations" screenOptions= {{headerShown: false}}>
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="AddingEventCard" component={AddingEventCard} />
            <Stack.Screen name="MyProfile" component={MyProfileScreen} />
            <Stack.Screen name="MyProfileEdit" component={MyProfileEdit} />
            <Stack.Screen name="EventCardInsideScreen" component={EventCardInsideScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
            <Stack.Screen name="Users" component={UsersScreen} />
            <Stack.Screen name="MyEvents" component={MyEventsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
