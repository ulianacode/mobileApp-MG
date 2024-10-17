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
    height: 'auto', // Ajust everithing to phone screen size
    width: '90%',
    backgroundColor: 'white',
  },
  icon: {
    width: 130,
    height: 130,
  },
  bottomBoxContainer: {
    marginTop: 30,
    top: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 'auto', // Ajust everithing to phone screen size
    width: '50%', // Adjust the width as needed
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#F26430'
  },
  bottomBoxText: {
    bottom: 2,
    fontSize: 24,
    fontFamily: 'Inter_700Bold', // Ensure you have this font loaded
  },

  fieldContainer: {
    marginLeft: '20%',
    width: '100%',
    marginVertical: 10,
    top: 30,
  },
  labelContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  label: {
    fontSize: 20,
    marginBottom: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniicon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 25,
  },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: '#000000',
    marginTop: 0,
    bottom: 20,
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
});

export default styles;