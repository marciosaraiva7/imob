import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "../Notifications/NotificationsStyles";

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Ionicons name="arrow-back-sharp" size={26} color="black" />
      </TouchableOpacity>
      <View>
        <Text>Notificacoes</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
