import { Camera, CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface QRCodeScannerProps {
  onQRCodeScanned: (data: string) => void; // Callback para retornar o QR code
  codeValid: string;
  id: number;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({
  onQRCodeScanned,
  codeValid,
  id,
}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  // Solicita permissão para a câmera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setIsModalVisible(false); // Fecha o modal após o scan
    onQRCodeScanned(data); // Envia o dado escaneado para o callback
  };

  const insertCode = () => {
    router.push({
      pathname: "/InsertCode/InsertCode",
      params: {
        type: "Corretor",
        name: "Marcio Saraiva",
        id: id,
        codeValid: codeValid,
      },
    });
  };

  // Caso a permissão não tenha sido concedida
  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Permissão negada para acessar a câmera.</Text>;
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)} // Abre o modal com a câmera
      >
        <Text style={styles.buttonText}>Ler QR Code</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <CameraView
            style={StyleSheet.absoluteFillObject}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setScanned(false);
              setIsModalVisible(false); // Fecha o modal
              insertCode();
            }}
          >
            <Text style={styles.closeButtonText}>Inserir código</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80BC38",
    borderRadius: 23,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "transparent",
    padding: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 45,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: "#80BC38",
    marginHorizontal: 17,
  },
  closeButtonText: {
    color: "#80BC38",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QRCodeScanner;
