// src/components/ButtonGroup/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    top:  0,
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

export default styles;