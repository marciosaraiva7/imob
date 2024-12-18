import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../Notifications/NotificationsStyles";

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Notificacoes</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
