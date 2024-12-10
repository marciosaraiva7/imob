import { Dimensions, StyleSheet } from "react-native";
import { FONT } from "../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B5563", // bg-gray-600
    paddingHorizontal: 40,
  },
  innerContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingTop: 105, // pt-[6.56rem] ≈ 105px
    paddingHorizontal: 4,
  },
  logoText: {
    fontSize: 24, // text-2xl
    color: "white",
    fontWeight: "normal",
    paddingBottom: 114, // pb-[7.13rem] ≈ 114px
  },
  inputContainer: {
    flexDirection: "row", // Alinhamento horizontal para o ícone e o campo de texto
    alignItems: "center", // Centraliza verticalmente o ícone e o TextInput
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 16, // Espaço entre os campos
    width: "100%",
  },
  icon: {
    marginRight: 10, // Espaçamento entre o ícone e o campo de texto
  },
  textInput: {
    flex: 1, // Faz o TextInput ocupar o restante do espaço
    color: "white",
    height: 40, // Altura do campo
    fontSize: 19.2, // Tamanho do texto
  },
  button: {
    width: Dimensions.get("window").width - 80,
    height: 40,
    marginBottom: 32, // mb-8
    backgroundColor: "#00C851", // bg-green-button
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999, // rounded-full
  },
  buttonText: {
    fontFamily: FONT.ROBOTO_BOLD,
    color: "white",
    fontSize: 19.2,
  },
  recoveryPassword: {
    color: "#00C851",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 32,
  },
  createAccount: {
    width: Dimensions.get("window").width - 80,
    height: 40,
    marginBottom: 32,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "#00C851",
  },
  createAccountText: {
    color: "#00C851",
    fontWeight: "bold",
    fontSize: 19.2,
  },
});

export default styles;
