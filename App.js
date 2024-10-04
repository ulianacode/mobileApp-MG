import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </SafeAreaView>
  );
}