import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View>
        <Image
          source={
            "https://classic.exame.com/wp-content/uploads/2020/09/Ricardo-Martins_imoveis.jpg?quality=70&strip=info&w=1024"
          }
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      <View>
        <Icon name="home" size={20} color="#000" />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
