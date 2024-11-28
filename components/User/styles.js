// src/components/EventCard/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingBottom: 15,
        paddingLeft: 10,
        marginBottom: 0,
    },

    informationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
    },

    imageStyle: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 10,
    },

    rightContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },

    friendIcon: {
        width: 33,
        height: 33,
        marginRight: 10, 
    },

    ratingContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingRight: 8,
    },

    starIcon: {
        width: 20,
        height: 20,
    },
    nameContainer: {
        flexDirection: 'row',
    },
    ratingText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 5, 
    },

    userNameText: {
        color: "#ADA5A1",
        fontSize: 16,
        paddingLeft: 5,
    },
    nameText: {
        fontSize: 16,
    },
    interBold: {
        fontFamily: 'Inter_700Bold',
      },
      interRegular: {
        fontFamily: 'Inter_400Regular',
      },
});

export default styles;
