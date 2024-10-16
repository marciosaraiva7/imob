import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./RecoveryPasswordStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function RecoveryPassword() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#1A1A1A"
        />
      </View>
    </SafeAreaView>
  );
}
