import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useCameraPermissions } from "expo-camera";

import QRCodeScanner from "../components/qrcodescanner";
import { plantoes } from "../constants/plantoes";
import styles from "./LoginStyles";

interface PlantaoI {
  code: string;
  id: number;
}

export default function Home() {
  const router = useRouter();
  const [facingCamera, setFacingCamera] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [qrData, setQrData] = useState<string | null>(null);

  const handleQRCodeScanned = useCallback((data: string) => {
    setQrData(data);
    alert(`QR Code lido: ${data}`);
  }, []);

  // Função para navegar para InsertCode, incluindo dados do QR
  const insertCode = useCallback(
    ({ code, id }: PlantaoI) => {
      router.push({
        pathname: "/InsertCode/InsertCode",
        params: {
          type: "Corretor",
          name: "Marcio Saraiva",
          codeValid: code,
          id: id,
        },
      });
    },
    [qrData, router]
  );

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Você precisa permitir acesso à câmera
        </Text>
        <Button onPress={requestPermission} title="Permitir Acesso" />
      </View>
    );
  }

  const type = "Corretor";
  const name = "Marcio Saraiva";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 35,
          paddingTop: 30,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
          <Image
            source={{
              uri: "https://classic.exame.com/wp-content/uploads/2020/09/Ricardo-Martins_imoveis.jpg?quality=70&strip=info&w=1024",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 999,
            }}
          />
          <View>
            <Text style={{ fontSize: 26, lineHeight: 34, fontWeight: "bold" }}>
              Olá, {type}
            </Text>
            <Text style={{ fontSize: 18, lineHeight: 24 }}>{name}</Text>
          </View>
        </View>
        <Icon name="circle-notifications" size={33} color={"orange"} />
      </View>

      <View style={{ paddingLeft: 35, paddingTop: 40, flex: 1 }}>
        <View style={{ marginBottom: 11 }}>
          <Text style={{ fontSize: 14, lineHeight: 19, color: "#1A1A1A" }}>
            Selecione um plantão
          </Text>
        </View>
        <FlatList
          data={plantoes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginRight: 20 }}>
              <ImageBackground
                source={{ uri: item.img }}
                resizeMode="cover"
                style={{
                  width: 320,
                  height: 440,
                  borderRadius: 30,
                  overflow: "hidden",
                  justifyContent: "flex-end",
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    lineHeight: 37,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    lineHeight: 29,
                    color: "white",
                  }}
                >
                  {item.address}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 21,
                      color: "white",
                    }}
                  >
                    Barra: {item.bar}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 21,
                      color: "white",
                    }}
                  >
                    Pós-Barra: {item.posbar}
                  </Text>
                </View>
                <QRCodeScanner
                  onQRCodeScanned={handleQRCodeScanned}
                  codeValid={item.codeValid}
                />
              </ImageBackground>

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 300,
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 23,
                  borderColor: "#80BC38",
                  marginHorizontal: 17,
                }}
                onPress={() =>
                  insertCode({ code: item.codeValid, id: item.id })
                }
              >
                <Text>Inserir código</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {qrData && (
          <Text style={{ marginTop: 20, fontSize: 16, color: "#333" }}>
            Dado do QR Code: {qrData}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}
