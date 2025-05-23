import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "column",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FBF6F4',
    position: 'absolute',
    top: -13,
    right: 0,
  },
  triangleBorder: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    position: 'absolute',
    top: -20,
    right: 0,
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
    marginTop: 0,
  },
  statusBar: {
    position: "absolute",
    top: 45,
    left: -116,
    width: 150,
    zIndex: 10,
    backgroundColor: "#FBF6F4",
    borderColor: "#000000",
    borderWidth: 3,
    textAlign: "end",
    padding: 10,
  },
  
  statusBar: {
    position: "absolute",
    top: 45,
    left: -216,
    width: 250,
    zIndex: 10,
    backgroundColor: "#FBF6F4",
    borderColor: "#000000",
    borderWidth: 3,
    textAlign: "end",
    paddingVertical: 0,
    paddingHorizontal: 10,
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#FBF6F4",
  },
  checkboxSelected: {
    backgroundColor: "#FBF6F4",
  },
  statusOption: {
    color: "#000000",
    textAlign: "center",
    paddingVertical: 5,
  },

});

export default styles;
