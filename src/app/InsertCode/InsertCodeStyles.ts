import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 170,
    backgroundColor: "#ffffff", // Exemplo de fundo
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 286,
    width: "85%",
  },
  icon: {
    color: "#000",
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#000",
    height: 40,
  },
  button: {
    backgroundColor: "#80BC38",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default styles;
