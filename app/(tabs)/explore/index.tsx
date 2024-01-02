import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
const index = () => {
  const [bookmark, setBookmark] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);

  //card
  const card = [
    {
      date: "10 \n June",
      title: "Developers Festival",
      address: "36 liverpool Street, Freetown",
      image: require("./../../../assets/images/event.jpg"),
    },
    {
      date: "10 \n June",
      title: "Developers Festival",
      address: "36 liverpool Street, Freetown",
      image: require("./../../../assets/images/event2.jpg"),
    },
    {
      date: "10 \n June",
      title: "Developers Festival",
      address: "36 liverpool Street, Freetown",
      image: require("./../../../assets/images/event3.jpg"),
    },
    {
      date: "10 \n June",
      title: "Developers Festival",
      address: "36 liverpool Street, Freetown",
      image: require("./../../../assets/images/event4.jpg"),
    },
    {
      date: "10 \n June",
      title: "Developers Festival",
      address: "36 liverpool Street, Freetown",
      image: require("./../../../assets/images/event1.jpg"),
    },
  ];

  //EVENT TYPES

  const eventtypes = [
    {
      name: "Music",
      color: "red",
    },
    {
      name: "Sport",
      color: "blue",
    },
    {
      name: "Food",
      color: "orange",
    },
    {
      name: "charity",
      color: "green",
    },
    {
      name: "conference",
      color: "purple",
    },
  ];
  return (
    <View className="flex-1 bg-gray-50">
      {/*header*/}
      <View className="w-full h-[179px] bg-[#4A43EC] rounded-b-3xl  items-center justify-center pt-4">
        {/**section 1 */}
        <View className="flex-row items-center w-full justify-end  pr-4">
          <View className=" ">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={"Choose a fruit."}
              ArrowUpIconComponent={() => (
                <EvilIcons name="chevron-up" size={24} color="white" />
              )}
              ArrowDownIconComponent={() => (
                <EvilIcons name="chevron-down" size={24} color="white" />
              )}
              placeholderStyle={{ color: "white" }}
              containerStyle={{ backgroundColor: "transparent", width: 200 }}
              style={{
                width: 150,
                backgroundColor: "transparent",
                borderWidth: 0,
              }}
              dropDownContainerStyle={{ width: 150, borderWidth: 0.2 }}
              arrowIconStyle={{}}
            />

            {/**city */}
            <Text className="pl-2 text-white font-semibold text-base">
              New York, USA
            </Text>
          </View>

          {/**call to action */}
          <View className="flex-row space-x-2">
            {/**search */}
            <Link href={"/(tabs)/"}>
              <View className="w-[36px] h-[36px] rounded-full items-center justify-center bg-[#524CE0]">
                <Ionicons name="search-outline" size={24} color="white" />
              </View>
            </Link>
            {/**notification */}
            <Link href={"/(tabs)/"}>
              <View className="w-[36px] h-[36px] rounded-full items-center justify-center bg-[#524CE0]">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </View>
            </Link>
          </View>
        </View>
      </View>
      <ScrollView className="flex-1  ">
        {/**event types */}
        <View className="flex-row w-full pl-4 pr-1 space-x-2">
          <GestureScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="space-x-4 flex-row mt-4">

            {eventtypes.map((value, index)=>(
                <TouchableOpacity key={index}
                style={{backgroundColor:value.color}}
                className={`w-32 h-12 rounded-xl items-center justify-center flex-row space-x-2`}>
                {value.name==="Food"?<MaterialCommunityIcons name="food-turkey" size={24} color="white" />:(
                    value.name==="Music"?<FontAwesome5 name="music" size={24} color="white" />:(
                        value.name==="Sport"?<MaterialIcons name="sports-soccer" size={24} color="white" />:(
                            value.name==="charity"?<MaterialCommunityIcons name="charity" size={24} color="white" />:(
                                value.name==="conference"?<MaterialIcons name="people-alt" size={24} color="white" />:null
                            )
                        )
                    )
                )}

                <Text className="text-white">
                    {value.name}
                </Text>
                </TouchableOpacity>
            ))}
            </View>
          </GestureScrollView>
        </View>
        {/**upcoming events */}
        <View
          className="w-full h-[300px] 
         p-4"
        >
          <View className="w-full flex-row">
            <Text className="text-[18px] font-medium">Upcoming Event</Text>

            {/**see all */}
            <View className="flex-1  items-end h-6 justify-center ">
              <Link href={"/(tabs)/"}>
                <View className="flex-row items-center  ">
                  <Text className="text-[14px] text-gray-500">See All</Text>
                  <Entypo name="triangle-right" size={24} color="gray" />
                </View>
              </Link>
            </View>
          </View>

          {/**upcoming event */}
          <GestureScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="space-x-4 flex-row mt-4">
              {card.map((value, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-[237px] h-[240px] border-[0.2px] shadow-sm bg-white border-gray-300 rounded-[16px] items-center pt-3 "
                >
                  <ImageBackground
                    source={value.image}
                    className="w-[218px] h-[131px] rounded-[16px]"
                    imageStyle={{ borderRadius: 16 }}
                  >
                    <View className="flex-1 opacity-50 bg-gray-500 rounded-[16px]"></View>
                    {/**date */}
                    <View className="absolute top-4 left-4">
                      <View className="bg-white items-center justify-center w-12 h-12 rounded-lg">
                        <Text className="text-center font-bold text-red-500">
                          {value.date}
                        </Text>
                      </View>
                    </View>
                    {/**save */}
                    <View className="absolute left-44 top-4">
                      <TouchableOpacity
                        onPress={() => {
                          setBookmark(!bookmark);
                        }}
                        className="w-8 h-8 rounded-lg bg-white items-center justify-center"
                      >
                        <FontAwesome
                          name="bookmark"
                          size={24}
                          color={!bookmark ? "#E57373" : "red"}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  {/**title */}
                  <View className="w-11/12 p-2">
                    <Text className="text-[18px] font-medium">
                      {value.title}
                    </Text>
                  </View>

                  <View className="w-11/12 flex-row items-center">
                    <MaterialIcons name="location-on" size={24} color="gray" />
                    <Text className="text-gray-500 text-[13px] font-light">
                      {value.address}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </GestureScrollView>
        </View>

        <View className="w-full h-40 items-center justify-center">
          <View className="w-11/12 bg-teal-200 rounded-lg border-[0.2px] border-gray-400 flex-row shadow-lg items-center justify-center">
            {/**promo */}
            <View className="space-y-2">
              <Text className="text-[18px] font-medium">
                Invite your Friends
              </Text>
              <Text className="text-[13px] font-light">
                Get Le200 for ticket
              </Text>
              <TouchableOpacity className="w-[72px] h-[32px] items-center justify-center bg-[#00F8FF] border-[0.2px] border-gray-400">
                <Text>INVITE</Text>
              </TouchableOpacity>
            </View>

            {/*gift*/}
            <View>
              <Image
                source={require("../../../assets/images/gift.png")}
                className="w-52 h-40 "
              />
            </View>
          </View>
        </View>

        {/**nearby event */}
        <View className="w-full p-4">
          <View className="w-full flex-row">
            <Text className="text-[18px] font-medium">Nearby Event</Text>

            {/**see all */}
            <View className="flex-1  items-end h-6 justify-center ">
              <Link href={"/(tabs)/"}>
                <View className="flex-row items-center  ">
                  <Text className="text-[14px] text-gray-500">See All</Text>
                  <Entypo name="triangle-right" size={24} color="gray" />
                </View>
              </Link>
            </View>
          </View>
          <GestureScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="space-x-4 flex-row mt-4">
              {card.map((value, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-[237px] h-[240px] border-[0.2px] shadow-sm bg-white border-gray-300 rounded-[16px] items-center pt-3 "
                >
                  <ImageBackground
                    source={value.image}
                    className="w-[218px] h-[131px] rounded-[16px]"
                    imageStyle={{ borderRadius: 16 }}
                  >
                    <View className="flex-1 opacity-50 bg-gray-500 rounded-[16px]"></View>
                    {/**date */}
                    <View className="absolute top-4 left-4">
                      <View className="bg-white items-center justify-center w-12 h-12 rounded-lg">
                        <Text className="text-center font-bold text-red-500">
                          {value.date}
                        </Text>
                      </View>
                    </View>
                    {/**save */}
                    <View className="absolute left-44 top-4">
                      <TouchableOpacity
                        onPress={() => {
                          setBookmark(!bookmark);
                        }}
                        className="w-8 h-8 rounded-lg bg-white items-center justify-center"
                      >
                        <FontAwesome
                          name="bookmark"
                          size={24}
                          color={!bookmark ? "#E57373" : "red"}
                        />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  {/**title */}
                  <View className="w-11/12 p-2">
                    <Text className="text-[18px] font-medium">
                      {value.title}
                    </Text>
                  </View>

                  <View className="w-11/12 flex-row items-center">
                    <MaterialIcons name="location-on" size={24} color="gray" />
                    <Text className="text-gray-500 text-[13px] font-light">
                      {value.address}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </GestureScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
