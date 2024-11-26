import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26430',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingTop: '30%',
    paddingBottom: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  boxContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 30,
    height: "auto",
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 0,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 50,
    marginTop: 0,
    flex: 1,
  },
  bottomBoxContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: "auto",
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#F26430',
    marginLeft: 40,
    marginTop: 60,
    marginBottom: -50,
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
    marginBottom: 10,
  },


  labelContainerPhoto:{
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
  left: 50,
  top: 20,
  },

  fieldContainerDate: {
    marginLeft: '20%',
    width: '100%',
    marginVertical: 3,
    top: 35,
    
  },
  labelContainerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  labelPhotoContainer: {
    flexDirection:'row',
    alignItems: 'center',
    top: 45,
  },
  labelPhoto: {
    fontSize: 18,
    color: '#F26430',
  },

  fieldContainer: {
    marginLeft: 0,
    width: '100%',
    marginVertical: 5,
    top: 20,
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

  line: {
    height: 1,
    width: '80%',
    backgroundColor: '#000000',
    marginTop: 0,
    bottom: 50,
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

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 15,
    width: '100%',
  },
  halfFieldContainer: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    top: 25,
  },
  separator: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  labelPhotoadd:{
    marginRight: 4,
  },
  addEventText: {
    fontSize: 24,
    bottom: 13,
    color: '#FFFFFF',
  },

  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  interRegular: {
    fontFamily: 'Inter_400Regular',
  },
});

export default styles;
