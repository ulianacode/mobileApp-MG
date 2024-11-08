import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'column',
  },
  buttonContainer: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button1: {
    flex: 1,
    backgroundColor: '#F8936E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  button2: {
    flex: 1,
    backgroundColor: '#ADA5A1',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  button3: {
    flex: 0.33, 
    backgroundColor: '#ADA5A1',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  notificationStyle: {
    height: 28,
    width: 25,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: -2,
    marginTop: 10,
  },
  statusBar: {
    position: 'absolute',
    top: 45,
    left: -116,
    width: 150,
    zIndex: 10, 
    backgroundColor: '#FBF6F4',
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 0,
    textAlign: 'end',
    padding: 10, 
  },
  statusOption: {
    color: '#000000',
    textAlign: 'right',
    paddingVertical: 5, 
    borderBottomWidth: 3, 
    borderBottomColor: '#000000', 
  
  },
  lastStatusOption: {
    textAlign: 'right',
    borderBottomWidth: 0,
  },
  conteinerStatusBar: {
    position: 'absolute', 
    top: 53, 
    left: 373,
    zIndex: 5, 
  },
});

export default styles;
