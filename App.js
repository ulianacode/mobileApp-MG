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
import AddingEventCard from './screens/AddingEventCard/AddingEventCard';
import EventCardInsideScreen from './screens/EventCardInsideScreen/EventCardInsideScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import UsersScreen from './screens/UsersScreen/UsersScreen';
import RecommendationsScreen from './screens/RecommendationsScreen/RecommendationsScreen';
import MyEvents from './screens/MyEventsScreen/MyEvents';
import UserComplaintScreen from './screens/UserComplaintScreen/UserComplaintScreen';
import EventComplaintScreen from './screens/EventComplaintScreen/EventComplaintScreen';
import EmailVerificationScreen from "./screens/EmailVerificationScreen/EmailVerificationScreen";
import ResetPasswordRequestScreen from './screens/ResetPasswordRequestScreen/ResetPasswordRequestScreen';
import ResetPasswordConfirmScreen from './screens/ResetPasswordConfirmScreen/ResetPasswordConfirmScreen';
import {TextEncoder} from 'text-encoding';
import NotificationsScreen from './screens/NotificationsScreen/NotificationsScreen';
import NotificationsCardInsideScreen from './screens/NotificationsCardInsideScreen/NotificationsCardInsideScreen'
global.TextEncoder = TextEncoder;

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
            <Stack.Screen name="MyEvents" component={MyEvents} />
            <Stack.Screen name="UserComplaint" component={UserComplaintScreen} />
            <Stack.Screen name="EventComplaint" component={EventComplaintScreen} />
            <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
            <Stack.Screen name="ResetPasswordRequest" component={ResetPasswordRequestScreen} />
            <Stack.Screen name="ResetPasswordConfirm" component={ResetPasswordConfirmScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="NotificationsCardInsideScreen" component={NotificationsCardInsideScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
