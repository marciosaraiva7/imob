import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./CreateAccountStyles";
import { StatusBar } from "expo-status-bar";

export default function CreateAccount() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#1A1A1A"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#1A1A1A"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#1A1A1A"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmação de senha"
          placeholderTextColor="#1A1A1A"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
