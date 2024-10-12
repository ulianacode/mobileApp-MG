// src/components/SearchBar/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    top: 0,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  planetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    left: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#FBF6F4',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 40,
    borderColor: '#FBF6F4',
  },
  endIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    right: 45,
  },
  cityText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 10,
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
});

export default styles;