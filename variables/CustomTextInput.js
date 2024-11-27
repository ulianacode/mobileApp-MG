import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      style={[styles.input, props.style]} 
      selectionColor="black"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default CustomTextInput;
