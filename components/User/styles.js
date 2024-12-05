// src/components/EventCard/styles.js
import { StyleSheet } from "react-native";

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
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 15,
    top: 0,
    paddingLeft: 10,
    marginBottom: 0,
  },

  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },

  imageStyle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  friendIcon: {
    width: 31,
    height: 31,
    marginRight: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 10,
  },

  starIcon: {
    width: 20,
    height: 20,
  },
  nameContainer: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 5,
    textAlign: "left",
    minWidth: 25,
  },

  userNameText: {
    color: "#ADA5A1",
    fontSize: 16,
    paddingLeft: 5,
    maxWidth: 80,
    textOverflow: "ellipsis",
  },
  nameText: {
    fontSize: 16,
  },
  interBold: {
    fontFamily: "Inter_700Bold",
  },
  interRegular: {
    fontFamily: "Inter_400Regular",
  },
});

export default styles;
