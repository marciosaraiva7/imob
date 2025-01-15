import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import useInscriptions from "@/src/hooks/useInscriptions";
import { Text, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./InsertCodeStyles";

export default function InsertCode() {
  const { type, name, qrData, id, codeValid } = useLocalSearchParams();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const { addPlantao } = useInscriptions();
  const handleInscription = async () => {
    addPlantao(Number(id));
    router.push({
      pathname: "/OnDutyDetail/OnDutyDetail",
      params: {
        id: id,
        codeValid,
      },
    });
  };

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="dark" />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.inputContainer}>
          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => setCode(text)}
            theme={{
              containerStyle: {
                marginBottom: 10,
              },
              pinCodeTextStyle: {
                color: success ? "#80BC38" : error ? "#f12c2c" : "black",
                fontWeight: "bold",
              },
              pinCodeContainerStyle: {
                backgroundColor: success
                  ? "#ddf8bd"
                  : error
                  ? "#f8d6d6"
                  : "transparent",
              },
            }}
          />
          {error && (
            <Text style={{ color: "#ff4d4d" }}>
              Código inválido, tente novamente!
            </Text>
          )}
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 40, // Acompanha o teclado ou fica na posição padrão
          left: 0,
          right: 0,
          alignItems: "center",
          paddingBottom: 0, // Margem de conforto
        }}
      >
        <TouchableOpacity
          style={[
            styles.button,
            success && { backgroundColor: "#80BC38" },
            error && { backgroundColor: "#f12c2c" },
          ]}
          disabled={!success}
          onPress={handleInscription}
        >
          <Text style={styles.buttonText}>
            {success ? "Acessar" : "Aguardando..."}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
