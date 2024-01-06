import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation, router} from "expo-router";
import About from "../../../../components/About";
import Events from "../../../../components/Events";
import Comments from "../../../../components/Comments";

const organizerProfile = () => {
  const [select, setSelect] = useState("about");
  const navigation = useNavigation();

  const params = useLocalSearchParams();
  const { organizer, organizerPhoto } = params;

  return (
    <View className="flex-1">
      <View className="h-[12%]  w-[100%] flex-row items-center space-x-3 pl-3">
        {/**back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack("");
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/**header */}
      </View>
      <View className="items-center">
        <View className="space-y-6 items-center">
          <View className="">
            <Image
              source={organizerPhoto}
              className="h-[96px] w-[96px] rounded-full"
            />
          </View>
          <Text className="text-3xl"> {organizer}</Text>
          <View className="items-center">
            <Text className="text-lg">+20 Events</Text>
            <Text className="font-thin text-lg">Hosted</Text>
          </View>
        </View>
      </View>
      <View className="items-center mt-6">
        <TouchableOpacity className="flex-row items-center justify-center rounded-[10px] space-x-4 h-[50px] w-[154px] border-2 border-[#5669FF]">
          <Feather name="message-circle" size={24} color="#5669FF" />
          <Text className="text-[#5669FF]">Message</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-evenly space-x-9 pt-5">
        {/* about btn */}
        {select === "about" ? (
          //   btn active
          <View className=" border-b-4 border-[#5669FF] ">
            <Text className="text-lg text-[#5669FF]">ABOUT</Text>
          </View>
        ) : (
          //    btn inactive
          <TouchableOpacity
            onPress={() => {
              setSelect("about");
            }}
          >
            <View>
              <Text className="text-lg text-[#747688]">ABOUT</Text>
            </View>
          </TouchableOpacity>
        )}
        {/* event btn */}

        {select === "event" ? (
          //   btn active
          <View className=" border-b-4 border-[#5669FF] ">
            <Text className="text-lg text-[#5669FF]">EVENT</Text>
          </View>
        ) : (
          //   btn inactive
          <TouchableOpacity
            onPress={() => {
              setSelect("event");
            }}
          >
            <View>
              <Text className="text-lg text-[#747688]">EVENT</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* reviews btn */}

        {select === "reviews" ? (
          //   btn active
          <View className=" border-b-4 border-[#5669FF] ">
            <Text className="text-lg text-[#5669FF]">REVIEWS</Text>
          </View>
        ) : (
          //   btn inactive
          <TouchableOpacity
            onPress={() => {
              setSelect("reviews");
            }}
          >
            <View>
              <Text className="text-lg text-[#747688]">REVIEWS</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {select === "about" ? (
        <About />
      ) : select === "event" ? (
        <Events />
      ) : select === "reviews" ? (
        <Comments />
      ) : null}
    </View>
  );
};

export default organizerProfile;
