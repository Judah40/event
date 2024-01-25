import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation, router } from "expo-router";

const index = () => {

    const navigation = useNavigation();
  return (
    <View className="justify-center items-center">
      <View className="h-[20%] w-[90%] flex-row items-center space-x-2">
        {/**back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/**header */}
        <Text className="text-2xl ">Notifications</Text>
      </View>
      <Text>index</Text>
    </View>
  );
}

export default index