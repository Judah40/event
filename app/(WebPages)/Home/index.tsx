import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Navigation from "../../../components/Navigation";
import Swiper from "react-native-swiper";
import { image } from "../../data";

const index = () => {
  return (
    <View className="flex-1 items-center  bg-white">
      <View className="w-full h-[95vh] z-10">
        <Swiper loop autoplay autoplayTimeout={10} style={{ width: "100%" }}>
          <ImageBackground
            resizeMode="cover"
            source={require("../../../assets/images/event.jpg")}
            className="w-full h-full relative "
          >
            <View className="flex-1 bg-gray-700 opacity-50"></View>
            <View className="absolute left-0 right-0 items-center top-40 m-auto w-[500px]  bg-red-500">
              <Text className="text-4xl font-bold text-white">
                Savor The Moment
              </Text>
              <Text className="text-lg text-white">{image[1].topic}</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../../../assets/images/event2.jpg")}
            className="w-full h-full"
          >
            <View className="flex-1 bg-gray-600 opacity-50"></View>
            <View className="absolute left-0 right-0 mr-auto ml-auto w-[500px]">
              <Text className="text-4xl font-bold text-white">
                Get Your Ticket
              </Text>
              <Text className="text-lg text-white">{image[2].topic}</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../../../assets/images/event1.jpg")}
            className="w-full h-full"
          >
            <View className="flex-1 bg-gray-600 opacity-50"></View>
            <View className="absolute left-0 right-0 mr-auto ml-auto w-[500px]">
              <Text className="text-4xl font-bold text-white">
                Make It Memorable
              </Text>
              <Text className="text-lg text-white">{image[3].topic}</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../../../assets/images/event3.jpg")}
            className="w-full h-full"
          >
            <View className="flex-1 bg-gray-600 opacity-50"></View>
            <View className="absolute left-0 right-0 mr-auto ml-auto w-[500px]">
              <Text className="text-4xl font-bold text-white">
                Feel The Vibe
              </Text>
              <Text className="text-lg text-white">{image[4].topic}</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            resizeMode="cover"
            source={require("../../../assets/images/event4.jpg")}
            className="w-full h-full"
          >
            <View className="flex-1 bg-gray-600 opacity-50"></View>
            <View className="absolute left-0 right-0 mr-auto ml-auto w-[500px]">
              <Text className="text-4xl font-bold text-white">Enjoy Event</Text>
              <Text className="text-lg text-white">{image[0].topic}</Text>
            </View>
          </ImageBackground>
        </Swiper>
      </View>
    </View>
  );
};

export default index;
