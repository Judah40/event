import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const index = () => {
  return (
    <View className="flex-1">
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 8.4606, // Latitude for Sierra Leone
          longitude: -11.7799, // Longitude for Sierra Leone
          latitudeDelta: 3, // Adjust this value to set the zoom level
          longitudeDelta: 3, // Adjust this value to set the zoom level
        }}
      >
        <View className="flex-1 items-center pt-20">
          <View className="w-80 h-12 bg-white flex-row items-center space-x-1 rounded-xl border-[0.2px] border-gray-600 pl-4">
            <Ionicons name="search-outline" size={24} color="gray" />
            <TextInput placeholder="Find your event" />
          </View>
        </View>
      </MapView>
    </View>
  );
};

export default index;
