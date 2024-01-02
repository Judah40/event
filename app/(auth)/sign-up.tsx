import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { image } from "../data";

const signup = () => {
  //states
  const [showPassword, setShowPassword] = useState(true);

  
  return (
    <View className="flex-1 space-y-2">
      <View className="w-full h-1/6  items-center justify-end  pb-4">
        <View className="w-11/12 space-y-4">
          {/**back button */}
          <Link href={"/sign-in"}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Link>

          <Text className="text-xl">Sign Up</Text>
        </View>
      </View>

      {/**sign up fields */}
      <View className="w-full items-center space-y-4">
        {/**username */}
        <View className="w-11/12 h-[56px] border-[0.2px] border-gray-700 rounded-[12px] flex-row items-center space-x-4 pl-4">
          <FontAwesome5 name="user" size={24} color="gray" />
          <TextInput placeholder="abc@Full name" />
        </View>
        {/**email */}
        <View className="w-11/12 h-[56px] border-[0.2px] border-gray-700 rounded-[12px] flex-row items-center space-x-4 pl-4">
          <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
          <TextInput placeholder="abc@email.com" />
        </View>

        {/**password */}
        <View className="w-11/12 h-[56px] border-[0.2px] border-gray-700 rounded-[12px] flex-row items-center space-x-4 pl-4">
          <Ionicons name="ios-lock-closed-outline" size={24} color="gray" />
          <TextInput
            placeholder="Your passwordf"
            secureTextEntry={showPassword}
            className="flex-1"
          />
          {/**hide and show password */}
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            className=" w-12 h-full items-center justify-center"
          >
            {showPassword ? (
              <Entypo name="eye" size={24} color="gray" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        {/**password */}
        <View className="w-11/12 h-[56px] border-[0.2px] border-gray-700 rounded-[12px] flex-row items-center space-x-4 pl-4">
          <Ionicons name="ios-lock-closed-outline" size={24} color="gray" />
          <TextInput
            placeholder="Confirm passwordf"
            secureTextEntry={showPassword}
            className="flex-1"
          />
          {/**hide and show password */}
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            className=" w-12 h-full items-center justify-center"
          >
            {showPassword ? (
              <Entypo name="eye" size={24} color="gray" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/**sign up button */}
      <View className="w-full items-center p-4  space-y-2">
        <TouchableOpacity className="w-[271px] h-[58px] bg-[#5669FF] rounded-[15px] items-center">
          <View className="w-11/12 justify-end flex-row h-full items-center space-x-16">
            <Text className="text-white font-semibold">SIGN UP</Text>
            <View className="w-[30px] h-[30px] rounded-full bg-[#3D56F0] items-center justify-center">
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <Text className="text-gray-500 text-lg font-semibold">OR</Text>
      </View>

      {/**OAuth Section */}
      <View className="w-full items-center gap-6 grid grid-cols-1">
        {/**google auth */}
        <TouchableOpacity className="flex-row items-center w-[273px] h-[56px] justify-center space-x-4 border-[0.2px] border-gray-200 rounded-[12px] shadow-xl bg-gray-200">
          <AntDesign name="google" size={24} color="black" />
          <Text>Login with Google</Text>
        </TouchableOpacity>
        {/**Facebook auth */}
        <TouchableOpacity className="flex-row items-center w-[273px] h-[56px] justify-center space-x-4 border-[0.2px] border-gray-200 rounded-[12px] shadow-xl bg-gray-200">
          <FontAwesome5 name="facebook" size={24} color="#1977F3" />
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/**sign up button */}
      <View className="flex-row w-full justify-center space-x-2 pt-8">
        <Text>Don't have an account?</Text>
        <Link href={"/sign-in"}>
          <Text className="text-[#5669FF]">Sign in</Text>
        </Link>
      </View>
    </View>
  );
};

export default signup;
