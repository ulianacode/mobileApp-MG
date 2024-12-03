// src/screens/FeedScreen/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: -2,
    marginTop: 0,
    zIndex: 1000,
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    marginLeft: 380,
    marginTop: -50,
  },
  imageStyle: {
    width: 24,
    height: 24,
    tintColor: '#000', 
  },
  containerStatusBar: {
    position: 'absolute',
    top: 100,
    left: 400,
    zIndex: 5,
  },
  statusBar: {
    position: 'absolute',
    top: 0,
    left: -150,
    width: 150,
    zIndex: 10,
    backgroundColor: '#FBF6F4',
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 0,
    textAlign: 'end',
    padding: 10,
    zIndex: 1,
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
  selectedStatusOption: {
    fontWeight: 'bold',
    color: '#F26430',
  },
  noUsersText: {
    fontSize: 16,
    color: '#888',
  },
});

export default styles;