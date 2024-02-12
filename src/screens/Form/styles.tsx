import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "100%",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  batLogo: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    position: "relative",
    left: -10,
  },
  label: {
    color: "#262626",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: "#262626",
    padding: 8,
    marginBottom: 5,
    borderRadius: 5,
  },
  textArea: {
    height: 80,
    marginBottom: 5,
  },
  button: {
    width: "100%",
    color: "#ffffff",
    backgroundColor: "#262626",
    borderRadius: 10,
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 20,
  },
  modalContainer: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#262626",
  },
  modalMessage: {
    color: "#ffffff",
    fontSize: 18,
  },
});
