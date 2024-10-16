import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 170,
    backgroundColor: "#ffffff", // Exemplo de fundo
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 50,
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
});
