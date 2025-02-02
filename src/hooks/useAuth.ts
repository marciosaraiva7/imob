import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useCallback, useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  name: string;
  [key: string]: any;
}

interface AuthContext {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  isTokenValid: boolean;
}

export const useAuth = (): AuthContext => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("authToken");
        if (storedToken) {
          validateAndSetToken(storedToken);
        }
      } catch (error) {
        console.error("Erro ao carregar informações do usuário:", error);
      }
    };

    loadAuthData();
  }, []);

  const validateAndSetToken = useCallback((jwt: string) => {
    try {
      const decoded: JwtPayload & User = jwtDecode(jwt);
      const isExpired = decoded.exp && Date.now() >= decoded.exp * 1000;

      if (isExpired) {
        logout();
      } else {
        setToken(jwt);
        setUser(decoded);
        setIsTokenValid(true);
      }
    } catch (error) {
      console.error("Token inválido:", error);
      logout();
    }
  }, []);

  const login = async (jwt: string) => {
    try {
      validateAndSetToken(jwt);
      await AsyncStorage.setItem("authToken", jwt);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      setUser(null);
      setToken(null);
      setIsTokenValid(false);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return {
    user,
    token,
    isAuthenticated: !!user,
    login,
    logout,
    isTokenValid,
  };
};
