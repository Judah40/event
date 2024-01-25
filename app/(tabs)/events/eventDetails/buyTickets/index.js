import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, router } from "expo-router";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [names, setNames] = useState([{ Name: "" }]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [newPrice, setNewPrice] = useState(price)
  const navigation = useNavigation();
  const orange = require("../../../../../assets/images/oran2.jpg");
  const africell = require("../../../../../assets/images/Afrimoney.jpeg");

  const params = useLocalSearchParams();

  const { description, price } = params;

  useEffect(() => {
    setNewPrice(price)
    console.log(index)
  },[])

  // add name and price logic
  const addNames = () => {
    setNames([...names, { Name: "" }]);
  
    setCount((prevcount) => {
      // Calculate the new price based on the updated count of names
      const newCount = prevcount + 1;
      const newPrice = price * newCount; // Multiply price by newCount
      setNewPrice(newPrice);
      return newCount; // Return the new count
    });
  };

  // delete name logic
  const removeName = (index) => {
    if (names.length === 1) {
      return;
    }
    const updatedNames = [...names];
    updatedNames.splice(index, 1); // Remove the name at the specified index
    setNames(updatedNames);
    setCount((prevcount) => prevcount - 1); // Decrement the count
  };

  // name change logic
  const handleNameChange = (index, key, value) => {
    const newName = [...names];
    newName[index][key] = value;
    setNames(newName);
    setIndex(index + 1);
    
  };

  return (
    <View className="flex-1 ">
      <View className="h-[15%] p-5 w-[100%] flex-row items-center space-x-3">
        {/**back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/**header */}
        <Text className="text-2xl text-black">Buy Tickets</Text>
      </View>
      <SafeAreaView className="flex-1">
        <ScrollView className="">
          <View className="w-[90%] self-center space-y-7">
            <View className="items-center justify-center">
              <Text className="text-lg ">Buy Tickets to</Text>
              <Text className="text-2xl font-bold mt-3">{description}</Text>
            </View>
            <View className="">
              <View className="">
                <Text className="text-lg font-bold">Ticket type</Text>
                <View className="flex-row justify-between bg-white shadow h-[70px] items-center p-3 rounded-lg mt-5">
                  <Text>Regular</Text>
                  <Text>Nle{price}</Text>
                </View>
                <View className="flex-row justify-between bg-white shadow h-[70px] items-center p-3 rounded-lg mt-5">
                  <Text>VIP</Text>
                  <Text>Nle{price}</Text>
                </View>
              </View>
              <View className="">
                <Text className="text-lg font-bold mt-6">Description</Text>
                <Text className="text-lg mt-3">1 Ticket per entry</Text>
              </View>
            </View>
            {/* ticket quantity controller */}
            <View className="space-y-3">
              <Text className="text-lg font-bold">Quantity</Text>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={removeName}
                  className="h-14 w-14 border-[4px] items-center rounded-full justify-center"
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-3xl">{count}</Text>
                <TouchableOpacity
                  onPress={addNames}
                  className="h-14 w-14 border-[4px] items-center rounded-full justify-center"
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            {/* names for tickets */}
            <View className="space-y-4">
              <Text className="text-lg font-bold">
                Enter names for your ticket(s)
              </Text>
              {names.map((name, index) => (
                <View key={index} className="space-y-3">
                  <Text className="text-lg">Name {index + 1}</Text>
                  <View className="border-b">
                    <TextInput
                      placeholder="sol caster"
                      placeholderTextColor="black"
                      onChangeText={(text) =>
                        handleNameChange(index, "Name", text)
                      }
                      value={name.Name}
                    />
                  </View>
                </View>
              ))}
            </View>
            {/* orangemoney and afrimoney */}
            <View className="space-y-10">
              <View className="space-y-5  h-[370px] rounded-lg bg-white shadow ">
                <Text className="text-center mt-3 text-2xl font-bold">
                  Orange
                </Text>
                <View className="flex-row m-2 border-b justify-between p-2">
                  <Text className="text-sm font-semibold">Tickets({ index })</Text>
                  <Text className="text-sm font-semibold">Nle{newPrice}</Text>
                </View>
                <View className="flex-row p-2 border-b m-2 justify-between">
                  <Text className="text-sm font-semibold">Processing Fee</Text>
                  <Text className="text-sm font-semibold">Nle200</Text>
                </View>
                <View className="flex-row p-2 m-2 border-b justify-between">
                  <Text className="text-lg font-bold">Total</Text>
                  <Text className="text-lg font-bold">Nle{newPrice}</Text>
                </View>
                <Text className="text-center text-lg">Make Payment</Text>
                <View className="items-center">
                  <TouchableOpacity className=" h-[50px] w-[350px] rounded-xl items-center justify-center bg-black">
                    <Image source={orange} className="h-[50px] w-[100px] " />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="space-y-5 mt-10 h-[370px] rounded-lg bg-white shadow ">
                <Text className="text-center mt-3 text-2xl font-bold">
                  Africell
                </Text>
                <View className="flex-row m-2 border-b justify-between p-2">
                  <Text className="text-sm font-semibold">Tickets</Text>
                  <Text className="text-sm font-semibold">Nle{newPrice}</Text>
                </View>
                <View className="flex-row p-2 border-b m-2 justify-between">
                  <Text className="text-sm font-semibold">Processing Fee</Text>
                  <Text className="text-sm font-semibold">Nle200</Text>
                </View>
                <View className="flex-row p-2 m-2 border-b justify-between">
                  <Text className="text-lg font-bold">Total</Text>
                  <Text className="text-lg font-bold">Nle{newPrice}</Text>
                </View>
                <Text className="text-center text-lg">Make Payment</Text>
                <View className="items-center">
                  <TouchableOpacity className=" h-[50px] w-[350px] rounded-xl items-center justify-center bg-[#a01773]">
                    <Image source={africell} className="h-[50px] w-[100px] " />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
