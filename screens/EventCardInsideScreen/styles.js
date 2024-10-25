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
        borderRadius: 10,
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
        marginTop: -20,
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
        backgroundColor: '#FBF6F4',
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
      },

      infoTextRating: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,       
        paddingVertical: 5,  
        marginLeft: 35,   
        backgroundColor: '#FBF6F4',
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
      },
    
    infoTextTitle: {
        fontSize: 16,
        color: '#000',
        width: 190,
        paddingHorizontal: 10,       
        paddingVertical: 5,     
        backgroundColor: '#FBF6F4',
        borderRadius: 10,
        textAlign: 'center', 
        fontWeight: 'semibold',
    },

    infonumAndRating: {
        flexDirection: 'row',
    },
    
    description: {
        paddingHorizontal: 15,       
        paddingVertical: 5,     
        fontSize: 14,
        lineHeight: 20,
        color: '#FBF6F4',
        marginBottom: 16,
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
        marginVertical: 50,
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
  });

  export default styles;