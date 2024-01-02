import { View, Text, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Circle, PROVIDER_GOOGLE } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const index = () => {
  const [myLocation, setMyLocation] = useState<any | null>(null);
  useEffect(() => {
    //get current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location.coords);
      console.log(location.coords);
    })();
  }, []);

  if (Platform.OS === "web") {
    return null;
  }
  return (
    <View className="flex-1">
      {myLocation ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: myLocation.latitude, // Latitude for Sierra Leone
            longitude: myLocation.longitude, // Longitude for Sierra Leone
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          showsMyLocationButton
        ></MapView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator />
        </View>
      )}

      {/**search */}
      <View className="w-full pt-12  items-center">
        <View className="w-10/12 h-12 rounded-lg p-2 marker: bg-white items-center flex-row space-x-4">
        <AntDesign name="search1" size={24} color="black" />
        <GooglePlacesAutocomplete
        onFail={()=>console.log("object")}
        nearbyPlacesAPI="GooglePlacesSearch"
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBcTumcJzby9oNVSWOY9UylojEF7vph5nA',
        language: 'en',
      }}
    />
        </View>
      </View>
    </View>
  );
};

export default index;
