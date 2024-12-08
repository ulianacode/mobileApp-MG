import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      flexShrink: 1,
    },
    description: {
      fontSize: 14,
      color: 'black',
      flexShrink: 1,
    },
    date: {
      color: 'grey',
    },
    titleContainer: {
      flexDirection: 'row',
    },
    imageStyle: {
      top: 9,
      right: 3,
      zIndex: 100,
    },
    
    titleAndDescriptionContainer: {
      flexDirection: 'column',
      paddingLeft: 10,
      bottom: -7,
    },
    dateContainer: {
      alignItems: 'flex-end',
      top: -30,
      paddingRight: 5,
    },
  });
  
export default styles;
