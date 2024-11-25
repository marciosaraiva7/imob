import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/home-line";
import { styles } from "./LoginStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importando a biblioteca de ícones

type RootStackParamList = {
  "CreateAccount/CreateAccount": undefined;
  "RecoveryPassword/RecoveryPassword": undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();

  function navigateToCreate() {
    navigation.navigate("CreateAccount/CreateAccount");
  }
  function navigateToRecovery() {
    navigation.navigate("RecoveryPassword/RecoveryPassword");
  }
  function navigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Logo />
        <Text style={styles.logoText}>BWay</Text>

        {/* Campo de Usuário com ícone */}
        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Usuário"
            placeholderTextColor="#9CA3AF"
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
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
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
    </SafeAreaView>
  );
}
