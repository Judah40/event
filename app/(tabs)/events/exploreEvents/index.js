import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  useNavigation,
  router,
  useRouter,
} from "expo-router";
import axios from "axios";
import data from "../../../../data/data"


const index = () => {
  const [info, setInfo] = useState([])
  const router = useRouter();
  const navigation = useNavigation();



  // const getUser = async () => {
    
  //   const options = {
  //     method: "GET",
  //     url: "http://0.0.0.0:3000//events",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then((response) => {
  //       setInfo(response.data.events);
  //       console.log(response.data.events);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };


  // useEffect(() => {
  //   getUser();
  //   // fetchEventData()
  // }, []);

  

  // Rendering the items
  const renderItem = ({ item }) => {
    return (
      <View className="bg-white justify-center shadow-sm mt-3 rounded-[10px] h-[115px]">
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/events/eventDetails",
              params: {
                date: item.date,
                description: item.description,
                location: item.location,
                img: item.img,
                attending: item.attending,
                alterDate: item.alterDate,
                organizer: item.organizer,
                organizerPhoto: item.organizerPhoto,
                price: item.price
              },
            });
          }}
        >
          <View className="flex-row justify-center">
            <View className="ml-3  h-[100px] w-[100px] justify-center items-center">
              <Image
                source={item.img}
                // style={{ resizeMode: 'contain' }}
                className="h-[90px] w-[100px] rounded"
              />
            </View>
            <View className="flex-col flex-1 ml-4 space-y-2 justify-center">
              <View className="h-[65%] justify-center space-y-2">
                <Text className="text-[#3D56F0]">{item.date}</Text>
                <Text className="font-bold text-lg">{item.description}</Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <Entypo name="location-pin" size={20} color="#B0B1BC" />
                <Text className="text-[#B0B1BC]">{item.location}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="h-[13%] w-[89%] mt-5 justify-end space-y-3">
        {/**back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/**header */}
        <Text className="text-2xl">Events</Text>
      </View>

      {/**flatlist */}
      <FlatList
        className="w-[90%] mt-1 mb-2"
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default index;
