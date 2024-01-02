import { View, Text } from "react-native";
import React, { useState,useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname } from 'expo-router';
const Navigation = () => {
  const pathname= usePathname()
  const [show, setShow] = useState(false);

  useEffect(()=>{
console.log(pathname)
  },[])
  return (
    <View className="w-full sticky top-0  p-4  bg-gray-600 lg:bg-none items-center justify-center ">
      {/**logo */}
      <View className="flex-row w-11/12 ">
        <TouchableOpacity>
          <Image
            source={require("../assets/images/eventlogo.png")}
            className="w-12 h-12"
          />
        </TouchableOpacity>

      {/**navigation 1 */}

<View className="flex-row hidden lg:flex bg-red-500 flex-1 justify-center items-center space-x-12">
  {/**home */}
  <TouchableOpacity>
    <Text className="text-lg text-white">
      Home
    </Text>
  </TouchableOpacity>
  {/**about */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      About
    </Text>
  </TouchableOpacity>
  {/**find event */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      Find Event
    </Text>
  </TouchableOpacity>
  {/**home */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      Cart
    </Text>
  </TouchableOpacity>
</View>

{/**hamburger button  */}
        <View className={`flex-1   items-end lg:hidden`}>
          {!show ? (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
            >
              <Ionicons name="menu" size={40} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
            >
              <Ionicons name="close" size={40} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/**mobile responsive header */}
      <View className={`fixed ${!show?"hidden":"grid"} lg:hidden gap-4 items-center`}>
         {/**home */}
  <TouchableOpacity>
    <Text className="text-lg text-white">
      Home
    </Text>
  </TouchableOpacity>
  {/**about */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      About
    </Text>
  </TouchableOpacity>
  {/**find event */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      Find Event
    </Text>
  </TouchableOpacity>
  {/**home */}
  <TouchableOpacity>
  <Text className="text-lg text-white">
      Cart
    </Text>
  </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;
