import Header from "@/src/components/HeaderComponent";
import { PlantaoI } from "@/src/constants/interfaces";
import { plantoes } from "@/src/constants/plantoes";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./OnDutyStyle";

export default function OnDutyDetail() {
  const router = useRouter();
  const { codeValid, id }: PlantaoI = useLocalSearchParams();

  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [filteredPlantao, setFilteredPlantao] = useState<any>(null);

  const bar = "09:00";
  const posBar = "09:45";

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
      <Header onBack={router.back} onHome={() => router.navigate("/Home")} />
      <ScrollView style={{ flex: 1, paddingTop: 130 }}>
        <ImageBackground
          source={{ uri: plantao.img }}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0.5, y: 0.14 }}
            end={{ x: 0.5, y: 0.5 }}
          />
          <LinearGradient
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            style={StyleSheet.absoluteFillObject}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0.77 }}
          />

          <View style={styles.checkinContainer}>
            <Text style={styles.nameBuilding}>{plantao.name}</Text>
            <Text style={styles.addressBuilding}>{plantao.address}</Text>
            <Text style={styles.checkInText}>
              <View style={styles.dotCheckIn} /> Check-in às {plantao.bar}
            </Text>
          </View>
          <View style={styles.viewTimer}>
            <BlurView
              tint="extraLight"
              intensity={88}
              style={styles.blurContainer}
            >
              <Text style={styles.textBlurContainer}>
                Aguarde o horário para o sorteio
              </Text>
              <Text style={styles.textSimple}>Faltam</Text>
              <Text style={styles.counter}>12:53</Text>
            </BlurView>
          </View>
          <View>
            <Text>Detalhes do plantão</Text>
            <View style={styles.viewBar}>
              <Text style={styles.textBar}>Barra: {bar}</Text>
              <Text style={styles.textBar}>Pós-Barra: {posBar}</Text>
            </View>
          </View>
        </ImageBackground>
        <View>
          <Text>Total de unidades: 345</Text>
          <Text>Atendimento: segunda, terca e sexta</Text>
        </View>
        <View style={styles.viewButtonExit}>
          <TouchableOpacity style={styles.buttonExit}>
            <Text style={styles.textButtonExit}>Sair do Plantao</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
