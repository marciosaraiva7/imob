import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const user = {
    name: "Marcio Saraiva",
    email: "marcio.saraiva@example.com",
    photo: "https://picsum.photos/200",
  };

  const options = [
    { id: 1, title: "Adicionar foto" },
    { id: 2, title: "Editar perfil" },
    { id: 3, title: "Mudar senha" },
  ];

  const handleLogout = () => {
    alert("Você saiu da sua conta.");
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: user.photo }} style={styles.profilePhoto} />
        <View>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
        </View>
      </View>

      <FlatList
        data={options}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Fazer Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 15,
    height: 73.5, // Mesmo tamanho proporcional do header anterior
    backgroundColor: "#ffffff",
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  list: {},
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    bottom: 95,
    alignSelf: "center",
    backgroundColor: "transparent",
    padding: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: "#bc3838",
    marginHorizontal: 17,
  },
  logoutText: {
    fontSize: 16,
    color: "#bc3838",
    fontWeight: "medium",
  },
});
