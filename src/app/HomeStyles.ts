import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: {
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 35,
    paddingTop: 30,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  greetingText: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 18,
    lineHeight: 24,
  },
  content: {
    paddingLeft: 35,
    paddingTop: 40,
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 11,
  },
  sectionTitleText: {
    fontSize: 14,
    lineHeight: 19,
    color: "#1A1A1A",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
  cardContainer: {
    marginRight: 20,
  },
  cardImage: {
    width: 320,
    height: 440,
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "flex-end",
    paddingHorizontal: 17,
    paddingVertical: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 28,
    lineHeight: 37,
    fontWeight: "bold",
    color: "white",
  },
  cardSubtitle: {
    fontSize: 22,
    lineHeight: 29,
    color: "white",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  cardInfoText: {
    fontSize: 16,
    lineHeight: 21,
    color: "white",
  },
  insertCodeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 45,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: "#80BC38",
    marginHorizontal: 17,
  },
  insertCodeButtonText: {
    fontSize: 16,
    color: "#80BC38",
  },
});

export default styles;
