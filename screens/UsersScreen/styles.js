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
    right: -2,
    zIndex: 10,
  },
  imageStyle: {
    width: 40,
    height: 40,
    tintColor: "black",
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
    left: -150,
    width: 150,
    zIndex: 10,
    backgroundColor: "#FBF6F4",
    borderColor: "#000000",
    borderWidth: 3,
    borderRadius: 0,
    textAlign: "end",
    padding: 10,
    zIndex: 1,
  },
  statusOption: {
    color: "#000000",
    textAlign: "center",
    paddingVertical: 5,
    borderBottomWidth: 3,
    borderBottomColor: "#000000",
  },
  lastStatusOption: {
    textAlign: "right",
    borderBottomWidth: 0,
  },
  selectedStatusOption: {
    fontWeight: "bold",
    color: "#F26430",
  },
  noUsersText: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    opacity: 0.6,
    textAlign: "center",
    top: 285,
  },
});

export default styles;
