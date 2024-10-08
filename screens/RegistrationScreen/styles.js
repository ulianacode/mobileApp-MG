// src/screens/LoadingScreen/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F26430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  square:{
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10, // Optional: to make the corners rounded
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;