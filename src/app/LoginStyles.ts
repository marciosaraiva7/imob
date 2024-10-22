import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B5563", // bg-gray-600
    paddingHorizontal: 40,
  },
  innerContainer: {
    flex: 1,
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
    width: "100%",
    height: 40,
    marginBottom: 32, // mb-8
    backgroundColor: "#00C851", // bg-green-button
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999, // rounded-full
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
    width: "100%",
    height: 40,
    marginBottom: 32,
    backgroundColor: "transparent",
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
