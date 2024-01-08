import { useRouter } from "expo-router";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import * as secureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Platform } from "react-native";

export type user = {
  email: string;
  password: string;
  userToken: string;
  platform:string
};

type AuthContextType = {
  user: user | null;
  login: (user: user) => void;
  logout: () => void;
};

export const userContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //states
  const [user, setUser] = useState<user | null>(null);
  const router = useRouter();
  const [token, setToken] = useState<string | any>("");

  //login
  const login = (newUser: user) => {
    setUser(newUser);
    AsyncStorage.setItem("token", newUser.userToken);
    AsyncStorage.setItem("platform", newUser.platform);
    if (Platform.OS === "web" && newUser.platform==="web") {
      return router.push("/Home");
    }
    return router.push("/(tabs)/");
  };

  //logout
  const logout = () => {
    setUser(null);
    router.push("/(auth)/sign-in");
    AsyncStorage.removeItem("token");
  };

  //auth check
  const authCheck = async () => {
    const userTokenAuth = await AsyncStorage.getItem("token");
    const platform = await AsyncStorage.getItem("platform");
    console.log(userTokenAuth);
    console.log(platform);
    if (userTokenAuth !== null && !platform) {
      return router.push("/(tabs)");
    }
    if (Platform.OS === "web" &&platform) {
      return router.push("/Home");
    }
    return router.push("/sign-in/");
  };

  //getToken
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setToken(token || null);
  };

  useEffect(() => {
    authCheck();
  }, [user, token]);
  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
