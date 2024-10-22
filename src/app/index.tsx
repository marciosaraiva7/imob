import React, { useState } from "react";
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
import Logo from "../../assets/images/home-line";
import { styles } from "./LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importando a biblioteca de ícones
import { StatusBar } from "expo-status-bar";

type RootStackParamList = {
  "CreateAccount/CreateAccount": undefined;
  "RecoveryPassword/RecoveryPassword": undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
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
    navigation.navigate("CreateAccount/CreateAccount");
  }
  function navigateToRecovery() {
    navigation.navigate("RecoveryPassword/RecoveryPassword");
  }
  function navigateToHome() {
    navigation.navigate("Home");
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
            <Text style={styles.logoText}>IMOB</Text>

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

            {/* Campo de Senha com ícone */}
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

            <TouchableOpacity onPress={navigateToRecovery}>
              <Text style={styles.recoveryPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={navigateToCreate}
              style={styles.createAccount}
            >
              <Text style={styles.createAccountText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
          <Toast autoHide />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
