import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF6F4",
    width: "100%",
    padding: 0,
  },
  contentContainer: {
    flex: 1,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ADA5A1',
  },
  messageTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  messageD: {
    fontSize: 16,
    color: '#000',
    top: 25,
    padding: 10,
  },
  
  dateAndMessageContainer: {
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: '#ccc', 
    top: 20,  
    width: "100%",
  },
});

export default styles;
