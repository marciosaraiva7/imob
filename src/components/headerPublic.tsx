import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
export const HeaderPublic = ({
  pageName,
  descriptionPage,
}: {
  pageName: string;
  descriptionPage: string;
}) => {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        paddingTop: 22,
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity onPress={router.back}>
        <Ionicons name="arrow-back-sharp" size={26} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 26,
          lineHeight: 34,
          fontWeight: "bold",
        }}
      >
        {pageName}
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: "100",
        }}
      >
        {descriptionPage}
      </Text>
    </View>
  );
};
