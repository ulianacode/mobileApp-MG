import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F26430",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: "auto",
    width: "90%",
    backgroundColor: "white",
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
    height: 'auto',
    width: '50%',
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#F26430'
  },
  bottomBoxText: {
    bottom: 2,
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
  fieldContainer: {
    marginLeft: "10%",
    width: "80%",
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 2,
    textAlign: "left",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#000000",
    marginTop: 2,
  },
  miniiconmail: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  miniicon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginLinkText: {
    fontSize: 20,
    color: "#F26430",
    textDecorationLine: "underline",
  },
});

export default styles;