import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "../../../context";
const index = () => {


    //context
    const {login, user, logout}=useAuth()
  //states
  const [viewImage, setViewImage] = useState(false);
  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-200">
      <View className="w-full h-52  flex-row justify-center  items-end">
        {/**profile picture */}
        <TouchableOpacity
          onPress={() => setViewImage(true)}
          className="w-24 h-24 rounded-full bg-gray-400 mb-8"
        >
          <Image
            source={require("../../../assets/images/event1.jpg")}
            className="w-full h-full rounded-full"
          />
          <View className="w-full items-end bottom-7">
            <AntDesign name="camerao" size={32} color="white" style={{}} />
          </View>
        </TouchableOpacity>

        {/**image viewing modal */}
        <Modal visible={viewImage}>
          <SafeAreaView className="flex-1 bg-black items-center ">
            <View className="h-1/6 items-center flex-row w-11/12 justify-between">
              {/**close image viewer */}
              <TouchableOpacity onPress={() => setViewImage(false)}>
                <Text className="text-white text-lg">Close</Text>
              </TouchableOpacity>
              {/**choose another image */}
              <TouchableOpacity onPress={() => pickImage()}>
                <Text className="text-white text-lg">Choose</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../../assets/images/event1.jpg")}
              className="h-4/6 w-full"
            />
          </SafeAreaView>
        </Modal>
      </View>
      {/**settings */}
      <View className="flex-1 bg-white items-center p-2">
        {/**profile */}
        <TouchableOpacity className="flex-row w-11/12 items-center justify-between p-4 ">
          {/**label and icon */}
          <View className="flex-row items-center space-x-8">
            <AntDesign name="user" size={24} color="black" />
            <Text>Profile</Text>
          </View>

          {/**next buttoon */}
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </TouchableOpacity>
        {/**contact us */}
        <TouchableOpacity className="flex-row w-11/12 items-center justify-between p-4 ">
          {/**label and icon */}
          <View className="flex-row items-center space-x-8">
            <AntDesign name="mail" size={24} color="black" />
            <Text>Contact Us</Text>
          </View>

          {/**next buttoon */}
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </TouchableOpacity>
        {/**help and faq */}
        <TouchableOpacity className="flex-row w-11/12 items-center justify-between p-4 ">
          {/**label and icon */}
          <View className="flex-row items-center space-x-8">
            <AntDesign name="questioncircleo" size={24} color="black" />
            <Text>Help & FAQ</Text>
          </View>

          {/**next buttoon */}
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/**sign out  */}
      <View className="w-full h-40  items-center justify-center">

      <TouchableOpacity
      onPress={()=>{
logout()
      }}
      className="items-center justify-center space-x-2 border border-white rounded p-4 flex-row">
      <FontAwesome name="sign-out" size={24} color="red" />
        <Text>
          Sign Out
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default index;
