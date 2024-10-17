// src/screens/LoadingScreen/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26430',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    top: 20,
    height: 'auto', // Ajust everithing to phone screen size
    width: '90%', 
    backgroundColor: 'white',
  },

  iconContainer: {
    paddingLeft: '80%',
    flexDirection: 'row',
    marginTop: -50,
  },

  iconeyeandprofile: {
    width: 53,
    height: 53,
  },

});

export default styles;