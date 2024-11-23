// src/screens/FeedScreen/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    margin: 0, 
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: -2,
    marginTop: 10,
  },
  statusBar: {
    position: 'absolute',
    top: 45,
    left: -116,
    width: 150,
    zIndex: 10, 
    backgroundColor: '#FBF6F4',
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 0,
    textAlign: 'end',
    padding: 10, 
  },
  statusOption: {
    color: '#000000',
    textAlign: 'right',
    paddingVertical: 5, 
    borderBottomWidth: 3, 
    borderBottomColor: '#000000', 
  
  },
  lastStatusOption: {
    textAlign: 'right',
    borderBottomWidth: 0,
  },
  conteinerStatusBar: {
    position: 'absolute', 
    top: 53, 
    left: 373,
    zIndex: 5, 
  },
});

export default styles;