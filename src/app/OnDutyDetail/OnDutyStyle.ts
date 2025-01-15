import { FONT } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  inputContainer: {
    flexDirection: "row",
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

  checkinContainer: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  nameBuilding: {
    fontFamily: FONT.ROBOTO_BOLD,
    fontSize: 28,
    lineHeight: 37,
    letterSpacing: 0,
    color: "#393939",
  },
  addressBuilding: {
    fontFamily: FONT.ROBOTO_MEDIUM,
    fontSize: 22,
    lineHeight: 29,
    letterSpacing: 0,
    color: "#393939",
    marginBottom: 10,
  },
  checkInText: {
    fontFamily: FONT.ROBOTO_MEDIUM,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0,
    color: "#393939",
  },
  dotCheckIn: {
    width: 13,
    height: 13,
    backgroundColor: "#80BC38",
    borderRadius: 13 / 2, // Metade do tamanho para ficar circular
    opacity: 1,
  },
  blurContainer: {
    width: 230,
    height: 230,
    borderRadius: 30,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 38,
  },
  textBlurContainer: {
    fontFamily: FONT.ROBOTO_BOLD,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
  },
  viewTimer: {
    display: "flex",
    flex: 1,
    width: "100%",
    paddingTop: 130,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default styles;
