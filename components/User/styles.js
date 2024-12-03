// src/components/EventCard/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingBottom: 15,
        top: 0,
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
        width: 31,
        height: 31,
        marginRight: 10, 
    },

    ratingContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10,
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
        textAlign: 'left',
        minWidth: 25,
    },

    userNameText: {
        color: "#ADA5A1",
        fontSize: 16,
        paddingLeft: 5,
        maxWidth: 80,
        textOverflow: 'ellipsis',
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
