// src/components/EventCard/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 0,

      },
      informationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 2,
    },

      imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },

    
    actionsContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
    },

    userNameText:{
        color: "#ADA5A1",
        fontSize: 14,
        paddingLeft: 5,
    },
    ratingContainer:{
        flexDirection: 'row',
    },

    ratingText: {
        fontSize: 14,
        left: 50,
        top: 0,
        color: '#000',
    },

    starIcon: {
        width: 20,
        height: 20,
        left: 45, 
    },



    friendIcon: {
        width: 30,
        height: 30,
        marginLeft: 0, 
    },

    interBold: {
        fontWeight: '700',
    },
    interRegular: {
        fontWeight: '400',
    },
});

export default styles;