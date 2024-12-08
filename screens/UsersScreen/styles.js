// src/screens/FeedScreen/styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexGrow: 1,
    padding: 0,
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: -2,
    marginTop: 0,
    zIndex: 1000,
  },
  menuButton: {
    position: "absolute",
    top: -7,
    right: -0.5,
    zIndex: 10,
  },
  imageStyle: {
    width: 40,
    height: 40,
    tintColor: "black",
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -5
  },
  radioButtonSelected: {
    backgroundColor: "#FBF6F4",
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderBottomColor: "#000000",
    height: 45,
    paddingLeft: 10
  },
  statusOption: {
    color: "#000000",
    textAlign: "center",
    flex: 1,
  },
  containerStatusBar: {
    position: "absolute",
    top: 90,
    left: 405,
    zIndex: 5,
  },
  statusBar: {
    position: "absolute",
    top: -50,
    left: -154,
    width: 155,
    zIndex: 10,
    backgroundColor: "#FBF6F4",
    borderColor: "#000000",
    borderWidth: 3,
    borderRadius: 0,
    zIndex: 1,
  },
  statusOption: {
    color: "#000000",
    textAlign: "center",
    paddingVertical: 2,
    fontFamily: "Inter_700Bold",
    width: '90%',
  },
  lastStatusOption: {
    textAlign: "right",
    borderBottomWidth: 0,
  },
  selectedStatusOption: {
    fontFamily: "Inter_700Bold",
  },
  noUsersText: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    opacity: 0.6,
    textAlign: "center",
    top: 285,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FBF6F4",
    position: "absolute",
    top: -13,
    right: 0,
  },
  triangleBorder: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    position: "absolute",
    top: -20,
    right: 0,
  },
});

export default styles;
