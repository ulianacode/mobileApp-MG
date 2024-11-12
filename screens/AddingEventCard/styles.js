import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26430',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingTop: '13%',
    paddingBottom: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  boxContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 30,
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 15,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 50,
    marginTop: 20,
    flex: 1,
  },
  bottomBoxContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#F26430',
    marginLeft: 40,
    marginTop: 80,
    marginBottom: -70,
  },
  bottomBoxText: {
    bottom: 2,
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  iconContainer: {
    paddingLeft: '70%',
    flexDirection: 'row',
    marginTop: -55,
  },

  iconeyeandprofile: {
    width: 50,
    height: 50,
  },

  fieldContainer: {
    marginLeft: '20%',
    width: '100%',
    marginVertical: 3,
    top: 35,
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
  labelPhotoContainer: {
    flexDirection:'row',
    alignItems: 'center',
    top: 45,
  },
  labelPhoto: {
    fontSize: 20,
    color: '#F26430',
  },

  fieldContainer: {
    marginLeft: 0,
    width: '100%',
    marginVertical: 5,
    top: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniiconphoto: {
    marginRight: 10,
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
  loginLinkContainer: {
    marginBottom: 0,
    alignItems: 'center',

  },
  loginLinkText: {
    fontSize: 20,
    color: '#F26430',
    textDecorationLine: 'underline',
    top: 25,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
