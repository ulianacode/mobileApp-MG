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
    borderRadius: 20,
    height: 135,
    width: "85%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    position: "relative",
    marginBottom: 100,
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
    width: "90%",
    marginVertical: 10,
  },
  loadingIndicator: {
    marginVertical: 10,
  },  
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  inputContainer: {
    marginLeft: -9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 2,
    marginTop: 2,
    textAlign: "left",
    top: -10,
  },
  line: {
    top: -10,
    height: 1,
    width: "100%",
    backgroundColor: "#000000",
    marginTop: 1,
  },
  miniicon: {
    marginTop: 2,
    height: 17,
    width: 25,
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