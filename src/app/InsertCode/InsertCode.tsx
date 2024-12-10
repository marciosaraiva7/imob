import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./InsertCodeStyles";

export default function InsertCode() {
  const { type, name, qrData, id, codeValid } = useLocalSearchParams();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navToDetail = () => {
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
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => setCode(text)}
              theme={{
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
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              success && { backgroundColor: "#80BC38" },
              error && { backgroundColor: "#f12c2c" },
            ]}
            disabled={!success}
            onPress={navToDetail}
          >
            <Text style={styles.buttonText}>
              {success ? "Acessar" : "Aguardando..."}
            </Text>
          </TouchableOpacity>

          {error && (
            <Text style={{ color: "#ff4d4d", marginTop: 10 }}>
              Código inválido, tente novamente!
            </Text>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
