import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    alignSelf: "center",
    marginVertical: "70%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "90%",
  },
  modalContent: {
    alignItems: "center",
    paddingBottom: 20,
    width: "100%",
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 0,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  acceptButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
  },
  declineButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
  },
  
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginTop: 30,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 18,
  },
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
    backgroundColor: '#FBF6F4',
    paddingHorizontal: 20, 
 },

 bottomBoxText: {
    bottom: 2,
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
 icon: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 1, 
 },
 iconTopRight: { 
  position: 'absolute',
  top: 15, 
  right: -170, 
  zIndex: 1, 
 },

 iconTopLeft: {
   position: 'absolute',
   top: 15, 
   right: 140, 
   zIndex: 1, 
 },

 fieldContainer: {
  width: '100%', 
  paddingBottom: 10,
 },
 labelContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 0,
  paddingVertical: 5,
  top: 5,
 },
 label: {
  fontSize: 20,
  marginBottom: 0,
  lineHeight: 20,
  fontFamily: 'Inter_700Bold',
 },
 miniiconmail: {
    marginRight: 5,
    marginLeft: -2.5,
    width: 28,
    height: 23,
  },

 miniiconplanet: {
    marginRight: 8,
    width: 23,
    height: 23,
  },

  miniicongender: {
    marginRight: 8,
    width: 23,
    height: 23,
  },

  miniiconstar: {
    marginRight: 10,
    width: 23,
    height: 23,
    marginLeft: 0,
    marginBottom: 5,
  },

  miniiconabout: {
  width: 23,
  height: 22,
  marginRight: 7,
  marginLeft: 1,
  },

 line: {
  height: 5,
  width: '150%', 
  backgroundColor: '#F26430',
  marginVertical: 5, 
  marginLeft: -25,
 }, 

 avatarContainer: {
  alignItems: 'center',
  marginBottom: 20,
  zIndex: 1,
 },
 avatar: {
  width: 142, 
  height: 142, 
  borderRadius: 50, 
  marginBottom: 10, 
  marginTop: 20,
 },
 name: {
  fontSize: 24,
  fontWeight: 'bold',
 },
 nickname: {
  fontSize: 20,
  color: 'gray', 
 },
 createEventButton: {
    marginTop: -25,
    padding: 10,
    backgroundColor: '#FBF6F4', 
    borderRadius: 30,
    borderWidth: 10, 
    alignItems: 'center',
    borderColor: '#F26430', 
},
createEventButtonText: {
    color: '#000000', 
    fontSize: 16,
    fontWeight: 'bold',
},
modalBackground: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContainer: {
  width: 300,
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 10,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 15,
},
});

export default styles;





