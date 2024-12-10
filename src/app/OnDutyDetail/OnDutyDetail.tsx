import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { ScrollView, StyleSheet } from "react-native";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { plantoes } from "@/src/constants/plantoes";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./OnDutyStyle";
import { PlantaoI } from "@/src/constants/interfaces";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Circle } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

export default function OnDutyDetail() {
  const router = useRouter();
  const { codeValid, id }: PlantaoI = useLocalSearchParams();

  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [filteredPlantao, setFilteredPlantao] = useState<any>(null);

  const plantao = plantoes.find((plantao) => plantao.id == id);
  if (!plantao) {
    throw new Error("Plantão não encontrado");
  }
  useEffect(() => {
    // Valida o código quando o usuário insere algo
    if (code.length === 6) {
      if (code === codeValid) {
        setSuccess(true);
        setError(false);
      } else {
        setSuccess(false);
        setError(true);
      }
    } else {
      setSuccess(false);
      setError(false);
    }
  }, [code]);

  useEffect(() => {
    const filterById = (id: number | string) => {
      const plantao = plantoes.find((item) => item.id === Number(id));
      return plantao || null;
    };
    if (typeof id === "number") {
      const plantao = filterById(id);
      setFilteredPlantao(plantao);
    }
  }, [id]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Ionicons name="arrow-back-sharp" size={26} color="black" />
      </TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: plantao.img }}
          resizeMode="cover"
          style={{
            flex: 1,
            height: 735,
            alignItems: "flex-start",
            backgroundColor: "#ffffff",
            overflow: "hidden",
            paddingHorizontal: 30,
          }}
        >
          <LinearGradient
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0.5, y: 0.18 }}
            end={{ x: 0.5, y: 0.6 }}
          />
          <LinearGradient
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0.9 }}
          />

          <View style={styles.checkinContainer}>
            <Text style={styles.nameBuilding}>{plantao.name}</Text>
            <Text style={styles.addressBuilding}>{plantao.address}</Text>
            <Text style={styles.checkInText}>
              <View style={styles.dotCheckIn} /> Check-in às {plantao.bar}
            </Text>
          </View>
          <View style={styles.viewTimer}>
            <BlurView tint="light" intensity={100} style={styles.blurContainer}>
              <Text style={styles.textBlurContainer}>
                Aguarde o horário para o sorteio
              </Text>
            </BlurView>
          </View>
        </ImageBackground>
        <View
          style={{
            height: 100,
          }}
        >
          <Text>Total de unidades: 345</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
