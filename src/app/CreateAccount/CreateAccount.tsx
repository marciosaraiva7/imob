import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./CreateAccountStyles";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleCreateAccount() {
    const payload = {
      name,
      email,
      password,
      confirmPassword,
    };
    if (payload.confirmPassword === payload.password) {
      Toast.show({
        type: "success",
        text1: "conta criada com sucesso",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "As senhas sao inconpativeis",
      });
    }
  }
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
            <Icon name="person" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              placeholderTextColor="#1A1A1A"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#1A1A1A"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#1A1A1A"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmação de senha"
              placeholderTextColor="#1A1A1A"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
          <Toast />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
