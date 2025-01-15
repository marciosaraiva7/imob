import { Camera } from "expo-camera";
import { useCallback, useEffect, useState } from "react";

interface QRCodeScannerHook {
  hasPermission: boolean | null;
  scanned: boolean;
  qrCodeData: string | null;
  requestPermission: () => Promise<void>;
  resetScanner: () => void;
  handleBarCodeScanned: ({ data }: { data: string }) => void;
}

export const useQRCodeScanner = (): QRCodeScannerHook => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  // Solicita permissão para a câmera
  const requestPermission = useCallback(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }, []);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  // Lida com a leitura do QR Code
  const handleBarCodeScanned = useCallback(({ data }: { data: string }) => {
    setScanned(true);
    setQrCodeData(data);
  }, []);

  // Reseta o scanner para ler outro QR Code
  const resetScanner = useCallback(() => {
    setScanned(false);
    setQrCodeData(null);
  }, []);

  return {
    hasPermission,
    scanned,
    qrCodeData,
    requestPermission,
    resetScanner,
    handleBarCodeScanned,
  };
};
