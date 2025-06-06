import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F26430",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  boxContainer: {
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: "auto",
    width: "90%",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  icon: {
    width: 130,
    height: 130,
  },
  bottomBoxContainer: {
    position: "absolute",
    bottom: -35, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 'auto',
    width: '60%',
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
    width: "80%",
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
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
    fontSize: 14,
    marginBottom: 2,
    textAlign: "left",
  },
  line: {
    top: -10,
    height: 1,
    width: "100%",
    backgroundColor: "#000000",
    marginTop: 5,
    marginBottom: -5,
  },
  miniiconmail: {
    marginRight: 10,
    width: 25,
    height: 17,
  },
  miniicon: {
    marginLeft: -3,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center", 
  },
  loginLinkText: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    marginTop: 10,
    marginBottom: 25,
  },
  loginLinkTextClickable: {
    fontSize: 18,
    color: "#F26430",
    textDecorationLine: "underline", 
    fontFamily: 'Inter_700Bold',
    marginTop: 10,
    marginBottom: 25,
  },
});

export default styles;