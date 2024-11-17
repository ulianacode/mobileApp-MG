// src/screens/FeedScreen/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0, // Ensure no padding is applied
    margin: 0, // Ensure no margin is applied
  },
  noEventsText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold', 
    opacity: 0.6,
    textAlign: 'center',
    top: 40,
  },
});

export default styles;