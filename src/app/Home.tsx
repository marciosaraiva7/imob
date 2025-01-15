import { useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

import QRCodeScanner from "../components/qrcodescanner";
import { plantoes } from "../constants/plantoes";
import useInscriptions from "../hooks/useInscriptions";
import styles from "./HomeStyles";

interface PlantaoI {
  code: string;
  id: number;
}
interface ScannerQRProps {
  data: string;
  code: string;
  id: number;
}

export default function Home() {
  const router = useRouter();
  const { parsedList, addPlantao } = useInscriptions(); // Obtém a lista de IDs de plantões
  const [permission, requestPermission] = useCameraPermissions();
  const [loading, setLoading] = useState(false);

  const handleQRCodeScanned = ({ data, code, id }: ScannerQRProps) => {
    if (code === data) {
      addPlantao(id);
      router.push({
        pathname: "/OnDutyDetail/OnDutyDetail",
        params: {
          id: id,
          codeValid: code,
          data: data,
        },
      });
    } else {
      alert("Código inválido ou expirado, tente novamente!");
    }
  };

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
    [router]
  );

  const handlePlantaoDetail = (item: any) => {
    if (parsedList.includes(item.id)) {
      router.push({
        pathname: "/OnDutyDetail/OnDutyDetail",
        params: {
          id: item.id,
          codeValid: item.codeValid,
        },
      });
    }
  };

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Você precisa permitir acesso à câmera
        </Text>
        <Button onPress={requestPermission} title="Permitir Acesso" />
      </View>
    );
  }

  const type = "Corretor";
  const name = "Marcio Saraiva";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.push("/Profile/Profile")}>
            <Image
              source={{
                uri: "https://classic.exame.com/wp-content/uploads/2020/09/Ricardo-Martins_imoveis.jpg?quality=70&strip=info&w=1024",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.greetingText}>Olá, {type}</Text>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/Notifications/Notifications")}
        >
          <Icon name="circle-notifications" size={33} color={"orange"} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Selecione um plantão</Text>
        </View>
        <FlatList
          data={plantoes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator animating={true} color={"blue"} />
            ) : (
              <View>
                <Text style={styles.emptyText}>Nenhum plantão</Text>
              </View>
            )
          }
          renderItem={({ item }) => {
            const isInscrito = parsedList.includes(item.id);

            return (
              <TouchableOpacity
                activeOpacity={isInscrito ? 0.4 : 1}
                onPress={() => handlePlantaoDetail(item)}
              >
                <View style={styles.cardContainer}>
                  <ImageBackground
                    source={{ uri: item.img }}
                    resizeMode="cover"
                    style={styles.cardImage}
                  >
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardSubtitle}>{item.address}</Text>
                    <View style={styles.cardInfo}>
                      <Text style={styles.cardInfoText}>Barra: {item.bar}</Text>
                      <Text style={styles.cardInfoText}>
                        Pós-Barra: {item.posbar}
                      </Text>
                    </View>
                    {!isInscrito && (
                      <QRCodeScanner
                        onQRCodeScanned={(data) =>
                          handleQRCodeScanned({
                            code: item.codeValid,
                            id: item.id,
                            data: data,
                          })
                        }
                        id={item.id}
                        codeValid={item.codeValid}
                      />
                    )}
                  </ImageBackground>
                </View>
                {!isInscrito && (
                  <TouchableOpacity
                    style={styles.insertCodeButton}
                    onPress={() =>
                      insertCode({ code: item.codeValid, id: item.id })
                    }
                  >
                    <Text style={styles.insertCodeButtonText}>
                      Inserir código
                    </Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
