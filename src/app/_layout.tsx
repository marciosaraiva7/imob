import { Stack } from "expo-router";
import { HeaderPublic } from "../components/headerPublic";

export default function Layout() {
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
          headerBackTitleVisible: false,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
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
          headerBackTitleVisible: false,
          headerBlurEffect: "extraLight",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
}
