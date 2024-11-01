// src/components/SearchBar/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F26430',
        width: '100%',
        
        
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
        width: '100%',
        backgroundColor: '#D9D9D9',
        borderRadius: 0,
        height: 40,
    },
    headerText: {
        fontSize: 16,
        justifyContent: 'center',
        color: '#000',
        
    },
    dater: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        height: 40,
        marginTop: -25,
        width: '100%',
        backgroundColor: '#F8936E',
        borderRadius: 10,
      },

    dateText: {
        fontSize: 14,
        color: '#000',
        marginTop: -2,
        fontWeight: 'bold',
    },

    namer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginLeft: 10,
        height: 40,
        width: '95%',
        backgroundColor: '#FBF6F4',
        borderRadius: 10,
 
      },

    title: {
        fontSize: 18,
        fontWeight: 'semibold',
        textAlign: 'center',
        paddingTop: 0,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    image: {
        width: 190,
        height: 190,
        borderRadius: 14,
        marginRight: 10,
        marginLeft: 7,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',         
        marginBottom: 16,
        paddingLeft: 10,
        paddingRight: 10,
        height: 35,
      },
      infoTextAprove: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,       
        paddingVertical: 5,     
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
      },

      infoTextRating: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,       
        paddingVertical: 5,    
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
      },
    
    infoTextTitle: {
        fontSize: 16,
        color: '#000',
        width: 155,      
        paddingVertical: 5,     
        backgroundColor: '#FBF6F4',
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
    },

    infoNum: {
        backgroundColor: '#FBF6F4',
        flexDirection: 'row',
        borderRadius: 10,
    },
    infoRating: {
        backgroundColor: '#FBF6F4',
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: 20,
    },

    infoNumAndRating: {
        flexDirection: 'row',    
    },

    infoTitle: {
        backgroundColor: '#FBF6F4',
        flexDirection: 'row',
        borderRadius: 10,
    },
    
    miniicon: {
        width:18,
        height: 13,
        marginLeft: 13, 
        marginTop: 10,
      },

    miniicontitle: {
        width:20,
        height: 20,
        marginLeft: 13, 
        marginTop: 5,
    },

    description: {
        paddingHorizontal: 15,       
        paddingVertical: 5,     
        fontSize: 14,
        lineHeight: 20,
        color: '#FBF6F4',
        marginBottom: 16,
        flexGrow: 1,
    },
    participationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    participationText: {
      fontSize: 16,
      marginRight: 8,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        left: -20,
        height: 50,
        width: 210,
        marginVertical: 0,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 45,
        borderRadius: 4,
    },
    checkboxChecked: {
        backgroundColor: '#F26430',
    },
    checkboxText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 20,
        paddingRight: 10,
        color: '#000',
        fontWeight: 'semibold',
    },
    chatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'space-between',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        left: 0,
        height: 50,
        width: 100,
        marginLeft: 130,
    },
    chatIcon: {
        left: 20,
    },
    rateButton: {
        backgroundColor: '#F26430',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    rateButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    ratingContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        left: -50,
        height: 80,
        width: 300,
        marginVertical: 50,
    },
    ratingText: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 50,
        color: '#000',
    },
    starsContainer: {
        flexDirection: 'row',
        marginLeft: 50,
        marginBottom: 10,
    },
    star: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },

    starOkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'space-between',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        height: 80,
        width: 100,
        right: -40,
        top: 50,
    },
    starOkIcon: {
        left: 20,
    },
    ratingAndOkContainer: {
        flexDirection: 'row',
    },
    ratingDisplayContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        height: 50,
        width: 250,
        left: 80,
        marginBottom: 20,
    },
    singleStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    singleStar: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    ratingNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FBF6F4',
        left: -24,
    },

    nonParticipationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBF6F4',
        borderRadius: 30,
        height: 35,
        width: 220,
        alignSelf: 'center', // Центрирует по горизонтали
        marginBottom: 20, // Отступ от нижней границы экрана
    },
    nonParticipationText: {
        fontSize: 18,
        marginBottom: 5,
        color: '#000',
        fontWeight: '600',
    },
    
  });

  export default styles;