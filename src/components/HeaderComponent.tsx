import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  onBack?: () => void;
  onHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack, onHome }) => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        zIndex: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
      start={{ x: 0.5, y: 0.3 }}
      end={{ x: 0.5, y: 1 }}
    >
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back-sharp" size={26} color="black" />
        </TouchableOpacity>
      )}
      {onHome && (
        <TouchableOpacity onPress={onHome}>
          <Ionicons name="home-outline" size={26} color="black" />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default Header;
