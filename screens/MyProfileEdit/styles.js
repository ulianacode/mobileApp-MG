import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F26430",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: "auto",
    width: "110%",
    top: 150,
    backgroundColor: "#FBF6F4",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dropDownItem: {
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: "#FBF6F4",
    fontFamily: 'Inter_700Bold',
    width: "100%",
  },
  dropDownItemText: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Inter_700Bold',
  },  
  dropDownPickerContainer: {
    position: 'absolute',
    top: 370,
    left: 0,
    right: 0,
    backgroundColor: "#FBF6F4",
    borderWidth: 1,
    borderColor: "#FBF6F4",
    zIndex: 3,
    maxHeight: 150,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "transparent",
},
  dropDownContainerStyle: {
    marginLeft: -10,
    zIndex: 100,
    backgroundColor: "#FBF6F4",
    borderRadius: 0,
    marginLeft: -51,
    width: "112%",
    borderColor: "transparent",
    backgroundColor: "#FBF6F4",
  },
  dropDownItemStyle: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
  },
  arrowStyle: {
    left: -10,
    marginLeft: -15,
  },

  dropDownLabelStyle: {
    fontSize: 20,
  },

  dropDownSelectedItemLabelStyle: {
    fontSize: 20,
  },

  placeholderStyle: {
    fontSize: 20,
  },

  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: "auto",
    width: "90%",
    top: 150,
    backgroundColor: "#FBF6F4",
    paddingHorizontal: 20,
  },

  bottomBoxText: {
    bottom: 2,
    fontSize: 24,
  },
  icon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  iconTopRight: {
    position: "absolute",
    top: 15,
    right: -170,
    zIndex: 1,
  },

  iconTopLeft: {
    position: "absolute",
    top: 10,
    right: 140,
    zIndex: 1,
  },

  fieldContainer: {
    width: "100%",
    paddingBottom: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    paddingVertical: 5,
    height: 35,
  },
  label: {
    fontSize: 20,
    marginBottom: -15,
    lineHeight: 20,
    fontFamily: 'Inter_700Bold',
   },
  miniiconmail: {
    marginRight: 5,
    marginLeft: -2.5,
    marginBottom: -10,
    width: 28,
    height: 23,
  },

  miniiconplanet: {
    marginBottom: -10,
    marginRight: 6,
    width: 27,
    height: 27,
  },

  miniicongender: {
    position: 'absolute',  // Используем абсолютное позиционирование
    top: 4,  // Располагаем иконку в верхней части контейнера
    left: 0,  // Левый отступ, чтобы иконка была рядом с текстом
    zIndex: 2,  // Позиционируем иконку поверх выпадающего списка
    width: 27,
    height: 27,
  },

  miniiconstar: {
    marginBottom: -10,
    marginRight: 10,
    width: 25,
    height: 25,
    marginLeft: 0,
    marginBottom: 5,
  },

  uploadIconContainer: {
    position: "absolute",
    right: 10,
    bottom: 25,
  },
  boxEditDeleteContainer:{
    position: "absolute",
    top: -115,
    right: -40,
  },

  uploadIcon: {
    width: 60,
    height: 60,
    top: 60,
  },
  deleteIcon: {
    width: 60,
    height: 60,
    top: -120,
    left: 50,
  },

  miniiconabout: {
    marginBottom: -10,
    width: 25,
    height: 25,
    marginRight: 7,
    marginLeft: 1,
  },

  miniiconprofile: {
    marginBottom: -10,
    width: 25,
    height: 25,
    marginRight: 7,
    marginLeft: 1,
  },

  line: {
    height: 5,
    width: "150%",
    backgroundColor: "#F26430",
    marginVertical: 5,
    marginLeft: -25,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 0,
    zIndex: 1,
  },
  avatar: {
    width: 142,
    height: 142,
    borderRadius: 50,
    marginBottom: -100,
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 20,
    color: "gray",
  },
  createEventButton: {
    marginTop: -25,
    padding: 10,
    backgroundColor: "#FBF6F4",
    borderRadius: 30,
    borderWidth: 10,
    alignItems: "center",
    borderColor: "#F26430",
  },
  createEventButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomBoxContainer: {
    marginTop: -30,
    top: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: "auto",
    width: "90%",
    backgroundColor: "white",
    borderWidth: 10,
    borderColor: "#F26430",
  },
  bottomBoxText: {
    bottom: 2,
    fontSize: 22,
  },
  headerContainer: {
    width: "100%",
  },
  notificationStyle: {
    height: 31,
    width: 27,
    position: "absolute",
    top: 17,
    right: 15,
  },
  dropDownGenderContainer: {
    position: 'absolute',
    top: 385,
    left: 0,
    right: 0,
    backgroundColor: "#FBF6F4",
    borderWidth: 1,
    borderColor: "#FBF6F4",
    zIndex: 1,
    maxHeight: 150,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "transparent",
  },
  dropDownGenderItem: {
    paddingVertical: 5,
    paddingHorizontal: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: "#FBF6F4",
    fontFamily: 'Inter_700Bold',
    width: "100%",
  },
  dropDownGenderItemText: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Inter_700Bold',
  },
  labelContainerPhoto: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    left: 50,
    top: 5,
  },
});

export default styles;
