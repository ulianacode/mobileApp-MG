// src/components/ButtonGroup/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 18, // Adjust the top position as needed
        left: 20, // Adjust the left position as needed
        zIndex: 1, // Ensure the button is above other elements
        marginTop: 0,
      },
      image: {
        width: 40,
        height: 25, // Adjust the height as needed
      },
  });
  
  export default styles;