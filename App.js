// src/App.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display LoadingScreen for 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {isLoading ? <LoadingScreen /> : <FeedScreen />}
    </SafeAreaView>
  );
}