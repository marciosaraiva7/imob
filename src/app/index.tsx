import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, CameraType } from "expo-camera";
import Logo from "../../assets/images/home-line";
import styles from "./LoginStyles";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importando a biblioteca de ícones
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

export default function Login() {
  const route = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Login Efetuado",
      text2: "Seja bem-vindo ao Bway 👋",
    });
  };

  function navigateToCreate() {
    route.push("/CreateAccount/CreateAccount");
  }
  function navigateToRecovery() {
    route.push("/RecoveryPassword/RecoveryPassword");
  }
  function navigateToHome() {
    route.push("/Home");
  }
  function handleLogin() {
    const payload = {
      user,
      password,
    };
    showToast();
    navigateToHome();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <StatusBar style="light" />
          <View style={styles.innerContainer}>
            <Logo />
            <Text style={styles.logoText}>BWay</Text>

            <View style={styles.inputContainer}>
              <Icon
                name="person"
                size={20}
                color="#9CA3AF"
                style={styles.icon}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Usuário"
                placeholderTextColor="#9CA3AF"
                value={user}
                onChangeText={(text) => setUser(text)}
              />
            </View>

            <View style={{ ...styles.inputContainer, marginBottom: 50 }}>
              <Icon name="lock" size={20} color="#9CA3AF" style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={navigateToRecovery}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: Dimensions.get("window").width - 80,
            }}
          >
            <Text style={styles.recoveryPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateToCreate}
            style={styles.createAccount}
          >
            <Text style={styles.createAccountText}>Criar Conta</Text>
          </TouchableOpacity>

          <Toast autoHide />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
