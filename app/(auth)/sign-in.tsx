import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useAuth, user } from "../../context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Dimensions } from "react-native";
import { image } from "../data";
import Carousel from "react-native-snap-carousel";
import Swiper from "react-native-swiper";

const signin = () => {
  //context
  const {login, user, logout}=useAuth()

  //states
  const [showPassword, setShowPassword] = useState(true);
  const [rememberPassword, setRememberPassword] = useState(false);

  //toogle Switch
  const toogleSwitch = () => setRememberPassword(!rememberPassword);

  
  return (
    <View className="flex-1 ">
      {/**logo */}
      <View className="w-full h-1/4  items-center justify-end">
        <Image source={require("../../assets/images/eventlogo.png")} />
        <Text className="text-4xl">EventHub</Text>
      </View>

      {/**sign in fields */}
      <View className="w-full  items-center p-4 space-y-4 ">
        <View className="w-11/12 ">
          <Text className="text-xl">Sign in</Text>
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

        <View className="w-11/12 flex-row items-center">
          <View className="flex-row items-center space-x-4">
            {/**button */}
            <Switch
              ios_backgroundColor={"#5669FF"}
              onValueChange={toogleSwitch}
              value={rememberPassword}
              trackColor={{ false: "#5669FF", true: "#5669FF" }}
            />
            <Text className="text-[14px] font-thin">Remember Me</Text>
          </View>

          {/* Forgot Password */}
          <View className="flex-1   items-end justify-center">
            <TouchableOpacity>
              <Text className="font-thin">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/**Sign in button */}
        <View className="">
          <TouchableOpacity
          onPress={()=>{
            const user:user={password:"hello", email:"hello",userToken:"hello"}
            login(user)
          }}
          className="w-[271px] h-[58px] bg-[#5669FF] rounded-[15px] items-center">
            <View className="w-11/12 justify-end flex-row h-full items-center space-x-16">
              <Text className="text-white font-semibold">SIGN IN</Text>
              <View className="w-[30px] h-[30px] rounded-full bg-[#3D56F0] items-center justify-center">
                <AntDesign name="arrowright" size={24} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-500 text-lg font-semibold">OR</Text>
      </View>

      {/**OAuth Section */}
      <View className="w-full items-center space-y-2">
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
        <Link href={"/sign-up"}>
          <Text className="text-[#5669FF]">Sign up</Text>
        </Link>
      </View>
    </View>
  );
};

export default signin;
