import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 15,
    height: 73.5, // Same proportional height as OnDutyDetail
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: "bold",
    color: "black",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "medium",
    lineHeight: 24,
    marginBottom: 5,
    color: "#333",
  },
  notificationDescription: {
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 24,
    color: "#666",
    marginBottom: 20,
  },
  divider: {
    height: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#BEDC41",
    width: "100%",
  },
});
