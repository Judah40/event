import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  useNavigation,
  router,
  useRouter,
  useLocalSearchParams,
  Link,
} from "expo-router";

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  // const [params] = useLocalSearchParams();
  // const { date, description, img, location } = params;

  // useEffect(() => {
  //   router.push({
  //     pathname: "/(tabs)/events/organizerProfile",
  //     params: {
  //       date,
  //       description,
  //       location,
  //       img,
  //       attending,
  //       alterDate,
  //       organizer,
  //       organizerPhoto,
  //     },
  //   });
  // }, []);

  {
    /**Dummy data */
  }
  const data = [
    {
      date: "wed, Apr 28 . 5:30 PM",
      description: "UNI Fest, Sierra Leone",
      location: "Raddison Blu Hotel",
      img: require("../../../../assets/images/carnival.jpeg"),
      attending: "+20 Going",
      alterDate: "28 April, 2024",
      organizer: "Solomon Kanu",
      organizerPhoto: require("../../../../assets/images/pp1.jpeg"),
    },
    {
      date: "wed, Apr 28 . 5:30 PM",
      description: "A Virtual evening of Jazz",
      location: "Kallon Car Park",
      img: require("../../../../assets/images/OIP.jpeg"),
      attending: "+50 Going",
      alterDate: "28 April, 2024",
      organizer: "Judah Dore",
      organizerPhoto: require("../../../../assets/images/pp2.jpg"),
    },
    {
      date: "Fri, Dec 30 . 2:30 PM",
      description: "Future Leaders for Kids",
      location: "Family Kingdom",
      img: require("../../../../assets/images/happy.jpeg"),
      attending: "+80 Going",
      alterDate: "30 December, 2024",
      organizer: "Ibrahim Kamara",
      organizerPhoto: require("../../../../assets/images/pp3.jpg"),
    },
    {
      date: "wed, Apr 28 . 5:30 PM",
      description: "50 Most Influential Women Awards and Dinner",
      location: "Lumley Beach Road",
      img: require("../../../../assets/images/dinner1.jpeg"),
      attending: "+150 Going",
      alterDate: "24 June, 2024",
      organizer: "Alex Steve",
      organizerPhoto: require("../../../../assets/images/pp4.jpg"),
    },
    {
      date: "Tue, Dec 10 . 8:30 PM",
      description: "Funky Fest",
      location: "Ware House",
      img: require("../../../../assets/images/concert.jpeg"),
      attending: "+64 Going",
      alterDate: "10 December, 2024",
      organizer: "Tony Stark",
      organizerPhoto: require("../../../../assets/images/event1.jpg"),
    },
    {
      date: "Sat, Jan 15 . 10:30 PM",
      description: "Color Fest Carnival",
      location: "Murray Town Field",
      img: require("../../../../assets/images/eventsss.jpeg"),
      attending: "+845 Going",
      alterDate: "15 January, 2024",
      organizer: "Scarlet Anderson",
      organizerPhoto: require("../../../../assets/images/event2.jpg"),
    },
    {
      date: "wed, Dec 5 . 9:30 PM",
      description: "A Night of concert",
      location: "Makeni",
      img: require("../../../../assets/images/concert1.jpeg"),
      attending: "+234 Going",
      alterDate: "5 December, 2024",
      organizer: "Azrael Kanu",
      organizerPhoto: require("../../../../assets/images/event3.jpg"),
    },
    {
      date: "Sat, Jan 18 . 5:30 PM",
      description: "50 Most Influential Men 2023",
      location: "Raddison Blu Hotel",
      img: require("../../../../assets/images/Dinner.jpeg"),
      attending: "+854 Going",
      alterDate: "18 January, 2024",
      organizer: "Gabriel Stones",
      organizerPhoto: require("../../../../assets/images/event4.jpg"),
    },
    {
      date: "Friday, Feb 21 . 10:30 PM",
      description: "Graduate Fest, Sierra Leone",
      location: "Freetown",
      img: require("../../../../assets/images/graduate.jpeg"),
      attending: "+186 Going",
      alterDate: "21 Feb, 2024",
      organizer: "Peter Parker",
      organizerPhoto: require("../../../../assets/images/sol.jpg"),
    },
  ];

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
