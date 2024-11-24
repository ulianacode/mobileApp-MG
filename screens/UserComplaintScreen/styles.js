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
    height: 'auto',
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
  },
  icon: {
    width: 130,
    height: 150,
  },
  bottomBoxContainer: {
    marginTop: 0,
    top: 60,
    left: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 'auto', 
    width: '50%', 
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#F26430'
  },
  bottomBoxText: {
    bottom: 2,
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },

  fieldContainer: {
    marginLeft: '0%',
    width: '100%',
    marginVertical: 10,
    top: 0,
  },
  labelContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 0,
    left: 0,
    top: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    top: 10,
  },
  miniicon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 3,
    fontSize: 14,
    textAlignVertical: 'top',
    borderBottomColor: '#000', 
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000',
    marginTop: 10,
  },
  regLinkContainer: {
    marginBottom: 15,
    alignItems: 'center',

  },
  recoverLinkContainer: {
    marginTop: 20,
    alignItems: 'center',

  },
  loginLinkText: {
    fontSize: 20,
    color: '#F26430',
    textDecorationLine: 'underline',
    top: 30,
  },
  
    interBold: {
      fontWeight: '700',
  },
  interRegular: {
      fontWeight: '400',
  },

});

export default styles;