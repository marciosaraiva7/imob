import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./RecoveryPasswordStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <StatusBar style="dark" />
          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor="#1A1A1A"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
