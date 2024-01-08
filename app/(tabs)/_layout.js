import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Slot, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import { BottomNavigation } from "react-native-paper";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import {Platform, Text, View} from "react-native"
/**


 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }


export default function TabLayout() {
  // const colorScheme = useColorScheme();
  // const path = usePathname();

  // useEffect(() => {
  //   console.log(path);
  // }, []);


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5669FF",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          // top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          elevation: 0,
          height: 50,
          background: "#5669ff",
          
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          href: null,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Ionicons
                  name="compass"
                  size={24}
                  color={focused ? "#5669ff" : "#747688"}
                />
                <Text className="text-[]">explore</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Ionicons
                  name="calendar"
                  size={24}
                  color={focused ? "#5669ff" : "#747688"}
                />
                <Text>events</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="addEvents"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  top: Platform.OS == "ios" ? -24 : -25,
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5669ff",
                }}
              >
                <AntDesign name="plussquare" size={24} color="#fff" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <Ionicons
                  name="md-location-sharp"
                  size={24}
                  color={focused ? "#5669ff" : "#747688"}
                />
                <Text>map</Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center justify-center">
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? "#5669ff" : "#747688"}
                />
                <Text>profile</Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
