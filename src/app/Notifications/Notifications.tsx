import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./NotificationsStyles";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Nova mensagem",
      description: "Você recebeu uma nova mensagem.",
    },
    {
      id: 2,
      title: "Plantão atualizado",
      description: "Seu plantão foi atualizado com sucesso.",
    },
    {
      id: 3,
      title: "Check-in confirmado",
      description: "Seu check-in foi confirmado.",
    },
    {
      id: 4,
      title: "Alerta de horário",
      description: "Faltam 10 minutos para o sorteio.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-sharp" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationDescription}>
              {item.description}
            </Text>
            <View style={styles.divider}></View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}
