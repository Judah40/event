import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from 'expo-av';

const index = () => {
  //states
  const [upcoming, setUpcoming] = useState(true);
  const [event, setEvents] = useState<any>();
  return (
    <View className="flex-1 ">
      {/**event selection */}
      <View className="w-full items-center h-1/6 justify-end">
        {/**inner container */}
        <View className="w-11/12 h-12 bg-[#979797] rounded-full items-center justify-between p-1 flex-row">
          {/**upcoming events */}
          {upcoming ? (
            <TouchableOpacity
              onPress={() => setUpcoming(false)}
              className="bg-white w-6/12 h-10 rounded-full justify-center items-center"
            >
              <Text>UPCOMING</Text>
            </TouchableOpacity>
          ) : (
            <View className="items-center justify-center w-6/12">
              <Text>UPCOMING</Text>
            </View>
          )}
          {/**past events */}
          {!upcoming ? (
            <TouchableOpacity
              onPress={() => setUpcoming(true)}
              className="bg-white w-6/12 h-10 rounded-full justify-center items-center"
            >
              <Text>PAST EVENTS</Text>
            </TouchableOpacity>
          ) : (
            <View className="items-center justify-center w-6/12">
              <Text>PAST EVENTS</Text>
            </View>
          )}
        </View>
      </View>


      {/**upcoming events */}
      {
        !event && upcoming
        ?
        <View className="flex-1 items-center justify-center ">
           <View className="w-60 h-40  items-center justify-center">
           <Image
            source={require('../../../assets/videos/Animation.gif')}
            className="w-24 h-24"
           />
           <Text className="text-lg font-semibold">
            No upcoming Events
           </Text>
           </View>
        </View>
        :
       (event && event.time==="upcoming"? <View className="flex-1 bg-red-500 p-2">

        </View>:null)
      }
      {/**past events */}
      {
        !event && !upcoming
        ?
        <View className="flex-1 items-center justify-center ">
           <View className="w-60 h-40  items-center justify-center">
           <Image
            source={require('../../../assets/videos/Animation.gif')}
            className="w-24 h-24"
           />
           <Text className="text-lg font-semibold">
            No past Events
           </Text>
           </View>
        </View>
        :
       (event && event.time==="past"? <View className="flex-1 bg-red-500 p-2">

        </View>:null)
      }
    </View>
  );
};

export default index;
