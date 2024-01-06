import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const index = () => {
  //states
  const [upcoming, setUpcoming] = useState(false);
  const [event, setEvents] = useState();

  const navigation = useNavigation()
  return (
    <View className="flex-1 ">
      {/**event selection */}
      <View className="w-full items-center h-1/6 justify-end">
        {/**inner container */}
        <View className="w-11/12 h-12 bg-[#979795] rounded-full items-center justify-between p-1 flex-row">
          {/**upcoming events */}
          {upcoming ? (
            <TouchableOpacity
              onPress={() => setUpcoming(false)}
              className="items-center justify-center w-6/12"
            >
              <Text>UPCOMING</Text>
            </TouchableOpacity>
          ) : (
            <View className="bg-white w-6/12 shadow-md h-10 rounded-full justify-center items-center">
              <Text className="text-[#5669FF]">UPCOMING</Text>
            </View>
          )}
          {/**past events */}
          {!upcoming ? (
            <TouchableOpacity
              onPress={() => setUpcoming(true)}
              className="items-center justify-center w-6/12"
            >
              <Text>PAST EVENTS</Text>
            </TouchableOpacity>
          ) : (
            <View className="bg-white w-6/12 shadow-md h-10 rounded-full justify-center items-center">
              <Text className="text-[#5669FF]">PAST EVENTS</Text>
            </View>
          )}
        </View>
      </View>

      {/**upcoming events */}
      {!event && upcoming ? (
        <View className="flex-1 items-center justify-center ">
          <View className="w-60 h-40  items-center justify-center">
            <Image
              source={require("../../../assets/videos/Animation.gif")}
              className="w-24 h-24"
            />
            <Text className="text-lg font-semibold">No past Events</Text>
          </View>
        </View>
      ) : event && event.time === "upcoming" ? (
        <View className="flex-1 p-2"></View>
      ) : null}
      {/**past events */}
      {!event && !upcoming ? (
        <View className="flex-1 items-center justify-center ">
          <View className="w-60 h-40  items-center justify-center">
            <Image
              source={require("../../../assets/videos/Animation.gif")}
              className="w-24 h-24"
            />
            <Text className="text-lg font-semibold">No upcoming Events</Text>
          </View>
        </View>
      ) : event && event.time === "past" ? (
        <View className="flex-1 bg-red-500 p-2"></View>
      ) : null}
      {/**explore event botton*/}
      <View className="justify-center items-center h-[15%]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("exploreEvents");
          }}
          className="bg-[#5669FF] h-[60px] flex-row w-[275px] rounded-[15px] justify-center items-center"
        >
          <View className="w-[220px]">
            <Text className="text-white text-center ml-7 font-bold">
              EXPLORE EVENTS
            </Text>
          </View>
          <View className="h-[32px] w-[32px] justify-center items-center rounded-full bg-[#3D56f0]">
            <AntDesign name="arrowright" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
