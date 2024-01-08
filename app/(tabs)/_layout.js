import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Slot, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import { BottomNavigation } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import {Platform, Text,} from "react-native"
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
        // tabBarStyle: {backgroundColor: "#5669FF"}
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
          tabBarIcon: () => <Ionicons name="compass" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="addEvents"
        options={{
          href: null,
          tabBarIcon: () => <Ionicons name="compass" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: () => (
            <Ionicons name="calendar" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-location-sharp" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user-alt" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
