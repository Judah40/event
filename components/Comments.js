import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Comments = () => {
  const [selectStar, setSelectStar] = useState("first");
  const CommentsData = [
    {
      img: require("../assets/images/pp1.jpeg"),
      name: "Sol Caster",
      date: "10 Feb",
      star: "",
      comments:
        "Elit labore irure ad minim laboris minim dolor excepteur est. Excepteur nulla do est cupidatat consequat in in magna officia. Voluptate tempor dolore ipsum officia culpa nulla ad sunt est. Culpa tempor voluptate ipsum ex aliqua nostrud eiusmod consequat. Consequat mollit ullamco velit Lorem nostrud amet et consequat aute. Veniam proident ea incididunt magna commodo proident eiusmod nulla pariatur..",
    },
    {
      img: require("../assets/images/pp1.jpeg"),
      name: "Judah Dore",
      date: "12 Feb",
      star: "",
      comments:
        "Elit labore irure ad minim laboris minim dolor excepteur est. Excepteur nulla do est cupidatat consequat in in magna officia. Voluptate tempor dolore ipsum officia culpa nulla ad sunt est. Culpa tempor voluptate ipsum ex aliqua nostrud eiusmod consequat. Consequat mollit ullamco velit Lorem nostrud amet et consequat aute. Veniam proident ea incididunt magna commodo proident eiusmod nulla pariatur..",
    },
    {
      img: require("../assets/images/pp1.jpeg"),
      name: "Foday Kanu",
      date: "15 Feb",
      star: "",
      comments:
        "Elit labore irure ad minim laboris minim dolor excepteur est. Excepteur nulla do est cupidatat consequat in in magna officia. Voluptate tempor dolore ipsum officia culpa nulla ad sunt est. Culpa tempor voluptate ipsum ex aliqua nostrud eiusmod consequat. Consequat mollit ullamco velit Lorem nostrud amet et consequat aute. Veniam proident ea incididunt magna commodo proident eiusmod nulla pariatur..",
    },
    {
      img: require("../assets/images/pp1.jpeg"),
      name: "Solomon Kanu",
      date: "15 Feb",
      star: "",
      comments:
        "Elit labore irure ad minim laboris minim dolor excepteur est. Excepteur nulla do est cupidatat consequat in in magna officia. Voluptate tempor dolore ipsum officia culpa nulla ad sunt est. Culpa tempor voluptate ipsum ex aliqua nostrud eiusmod consequat. Consequat mollit ullamco velit Lorem nostrud amet et consequat aute. Veniam proident ea incididunt magna commodo proident eiusmod nulla pariatur..",
    },
    {
      img: require("../assets/images/pp1.jpeg"),
      name: "Azrael Kanu",
      date: "17 Feb",
      star: "",
      comments:
        "Elit labore irure ad minim laboris minim dolor excepteur est. Excepteur nulla do est cupidatat consequat in in magna officia. Voluptate tempor dolore ipsum officia culpa nulla ad sunt est. Culpa tempor voluptate ipsum ex aliqua nostrud eiusmod consequat. Consequat mollit ullamco velit Lorem nostrud amet et consequat aute. Veniam proident ea incididunt magna commodo proident eiusmod nulla pariatur..",
    },
  ];

  const renderItems = ({ item }) => {
    return (
      <View className="space pt-7">
        <View className="flex-row space-x-2">
          <Image source={item.img} className="h-[34px] w-[34px] rounded-full" />
          <View>
            <Text className="text-lg font-semibold">{item.name}</Text>
          </View>
          <View className="flex-1 items-end">
            <Text className="text-[#747688]">{item.date}</Text>
          </View>
        </View>
        <View className="">
          <View className="flex-row w-[90%] pl-10">
            {selectStar === "first" ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectStar("first");
                }}
              >
                <AntDesign name="star" size={20} color="#FFCC00" />   
              </TouchableOpacity>
            ) : (
              <View>
                <AntDesign name="star" size={20} color="#FFCC00" />
              </View>
            )}

            {/* second star */}

            {selectStar === "second" ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectStar("second");
                }}
              >
                <AntDesign name="star" size={20} color="yellow" />
              </TouchableOpacity>
            ) : (
              <View>
                <AntDesign name="star" size={20} color="#FFCC00" />
              </View>
            )}
            {/* third star */}

            {selectStar === "third" ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectStar("third");
                }}
              >
                <AntDesign name="star" size={20} color="" />
              </TouchableOpacity>
            ) : (
              <View>
                <AntDesign name="star" size={20} color="#FFCC00" />
              </View>
            )}
            {/* fourth star */}

            {selectStar === "fourth" ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectStar("fourth");
                }}
              >
                <AntDesign name="star" size={20} color="white" />
              </TouchableOpacity>
            ) : (
              <View>
                <AntDesign name="star" size={20} color="#FFCC00" />
              </View>
            )}
          </View>
        </View>
        <View className="items-end pt-3">
          <View className="w-[90%] pl-1">
            <Text className="font-extralight">{item.comments}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-[90%] ">
        <FlatList
          data={CommentsData}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          className=" mt-1 mb-2"
        />
      </View>
      {/* <View className="h-[40px] w-[300px] border x"></View> */}
    </View>
  );
};

export default Comments;
