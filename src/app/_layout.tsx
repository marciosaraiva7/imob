import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { HeaderPublic } from "../components/headerPublic";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("../../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../../assets/fonts/Roboto-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="CreateAccount/CreateAccount"
        options={{
          headerTitle: (props) => (
            <HeaderPublic
              pageName={"Criar Conta"}
              descriptionPage="Crie sua conta para acessar nossa plataforma"
            />
          ),
          headerTransparent: true,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="RecoveryPassword/RecoveryPassword"
        options={{
          headerTitle: (props) => (
            <HeaderPublic
              pageName={"Recuperar senha"}
              descriptionPage="Esqueceu sua senha? Enviaremos uma nova agora mesmo."
            />
          ),
          headerTransparent: true,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="InsertCode/InsertCode"
        options={{
          headerTitle: (props) => (
            <HeaderPublic
              pageName={"Código de acesso"}
              descriptionPage="Insira o código para ter acesso ao plantão"
            />
          ),
          headerTransparent: true,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="OnDutyDetail/OnDutyDetail"
        options={{
          headerTransparent: true,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
}
