import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Share
} from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation, router } from "expo-router";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

const index = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const {
    price,
    date,
    description,
    location,
    img,
    attending,
    alterDate,
    organizer,
    organizerPhoto,
  } = params;

  console.log(params);
  const pic = require("../../../../assets/images/sol.jpg");
  const pic2 = require("../../../../assets/images/pp1.jpeg");
  const pic3 = require("../../../../assets/images/pp4.jpg");

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: " https://www.facebook.com \n Check out this amazing result!",
        // You can add more details to be shared here
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View className="flex-1">
      {/**Background image */}
      <ImageBackground className="h-[200px] w-full items-center" source={img}>
        <View className="h-[60%] w-[89%]  flex-row items-center space-x-3">
          {/**back button */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          {/**header */}
          <Text className="text-2xl text-white">Event Details</Text>
        </View>
      </ImageBackground>

      {/**event details */}
      <View className="items-center">
        <View className="w-[295px] h-[60] absolute -top-8  justify-center bg-white rounded-[30px]">
          <View className="items-center ml-2 flex-row">
            <View className="h-[34px] w-[34px] rounded-full absolute top-0 left-10">
              <Image source={pic} className="h-[34px] w-[34px] rounded-full" />
            </View>
            <View className="h-[34px] w-[34px] rounded-full bg-red-200 absolute top-0 left-5">
              <Image source={pic3} className="h-[34px] w-[34px] rounded-full" />
            </View>
            <View className="h-[34px] w-[34px] rounded-full bg-red-500">
              <Image source={pic2} className="h-[34px] w-[34px] rounded-full" />
            </View>
            <View className=" ml-11">
              <Text className="text-[#3f38dd]">{attending}</Text>
            </View>
            <TouchableOpacity onPress={onShare}>
              <View className="w-[67px] h-[28px] rounded-[7px] items-center justify-center ml-14 bg-[#3f38dd]">
                <Text className="text-white">Invite</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/**scrollview*/}
      <SafeAreaView className="flex-1 items-center justify-center">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-9 w-[90%]"
        >
          <View className="">
            <Text className="text-4xl">{description}</Text>
          </View>
          <View className="mt-6 space-y-6">
            <View className="flex-row space-x-4">
              <View className="h-[55px] w-[55px] bg-[#B0B1BC] items-center justify-center rounded-[15px]">
                <AntDesign name="calendar" size={30} color="#3f38dd" />
              </View>
              <View className="space-y-2">
                <Text className="text-lg font-bold">{alterDate}</Text>
                <Text className="text-[#B0B1BC]">Tuesday, 4:00PM</Text>
              </View>
            </View>
            <View className="flex-row space-x-4">
              <View className="h-[55px] w-[55px] bg-[#B0B1BC] items-center justify-center rounded-[15px]">
                <Entypo name="location-pin" size={30} color="#3f38dd" />
              </View>
              <View className="space-y-2">
                <Text className="text-lg font-bold">{location}</Text>
                <Text className="text-[#B0B1BC]">Tuesday, 4:00PM</Text>
              </View>
            </View>
          </View>
          {/**organizer details */}
          <View className="flex-1 h-[44px] mt-10 flex-row space-x-4">
            <View className="h-[55px] w-[55px] rounded-[15px]">
              <Image
                source={organizerPhoto}
                className="h-[55px] w-[55px] rounded-[15px]"
              />
            </View>
            <View className="space-y-1">
              <TouchableOpacity onPress={() => {
                router.push({
                  pathname: "/events/organizerProfile",
                  params: {
                    organizerPhoto,
                    organizer,
                    price,
                  }
                })
              }}>
                <Text className="font-medium text-lg">{organizer}</Text>
              </TouchableOpacity>
              <Text>Organizer</Text>
            </View>

            <View className="justify-center items-end flex-1">
              <TouchableOpacity className="w-[60px] h-[28] bg-[#B0B1BC] justify-center items-center rounded-[5px]">
                <Text className="text-[#3f38dd]">Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/**about event */}
          <View className="mt-7 space-y-3">
            <Text className="text-2xl">About Event</Text>
            <Text>
              Qui esse incididunt ut magna consectetur mollit id officia ipsum
              sunt reprehenderit incididunt sit. Aute Lorem laborum proident
              consequat ipsum Lorem dolore occaecat deserunt sit occaecat tempor
              esse nisi. Id sunt pariatur eu quis sunt labore duis consequat
              esse ullamco officia cupidatat aute ipsum. Magna culpa fugiat
              tempor ad consequat. In aliquip elit ut in eu. Consequat Lorem
              adipisicing excepteur eu excepteur fugiat voluptate elit
              incididunt nulla nostrud magna exercitation labore. Ad nulla amet
              ea velit qui elit laboris reprehenderit irure qui voluptate. Culpa
              enim enim sint aliqua eu fugiat exercitation ut eiusmod
              exercitation. Id nostrud deserunt sint aliquip voluptate. Mollit
              pariatur excepteur amet est consequat. Id nisi dolor eiusmod ut
              veniam eu incididunt. Minim ut mollit elit mollit cupidatat
              laboris consectetur. Duis elit pariatur tempor aute ea in commodo
              ullamco pariatur eu sint sit. Enim duis minim cillum laborum.
              Irure tempor incididunt deserunt quis eu velit cillum sit ad.
              Nostrud aute aute proident aliqua enim voluptate qui in aute
              voluptate labore. Cillum enim nulla aute sunt et consequat ad
              culpa enim eu enim cupidatat culpa Lorem. Excepteur est labore est
              reprehenderit elit aliquip ex laborum nulla et officia adipisicing
              ex culpa. Sit excepteur pariatur nulla culpa amet ex labore. Non
              eu irure elit reprehenderit pariatur velit dolore et ad nulla do.
              Ullamco minim aute eu irure minim commodo laborum est. Qui id do
              quis non tempor esse proident consequat occaecat enim exercitation
              amet cupidatat. Mollit nostrud officia anim eiusmod dolor aute
              irure aute. Lorem dolore et et et nostrud ea do Lorem eiusmod anim
              ad cillum et. Adipisicing commodo occaecat enim sit adipisicing
              occaecat nostrud Lorem Lorem deserunt nulla minim proident sunt.
              Nulla id eiusmod ipsum cupidatat magna cupidatat tempor consequat
              aliqua. Veniam ex dolore pariatur occaecat veniam minim quis aute
              veniam ad anim Lorem pariatur culpa. Voluptate Lorem anim nulla do
              culpa sint veniam id commodo sit. Excepteur enim do non laborum
              culpa reprehenderit. Eu elit mollit duis nisi enim. Amet pariatur
              sint minim do commodo mollit dolore excepteur laboris non sint.
              Non do eiusmod ea quis ipsum ex sint minim nulla. Ea aliquip ipsum
              ex proident. Minim culpa dolore ullamco incididunt magna excepteur
              velit voluptate id officia nulla cillum. Elit dolor laborum
              nostrud consectetur nisi occaecat non commodo mollit voluptate
              mollit fugiat. Excepteur duis cillum mollit non non nisi
              incididunt ex magna. Adipisicing aliqua commodo qui dolore laboris
              incididunt dolor cupidatat commodo proident. Nostrud quis qui
              aliqua culpa officia consequat est reprehenderit anim consectetur
              ad. Dolore pariatur incididunt culpa tempor ex aliqua nisi
              cupidatat.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/**buy tickets button */}
      <View className="justify-center items-center h-[12%]">
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/events/eventDetails/buyTickets",
              params: {
                description,
                price,
              },
            });
            navigation.navigate("buyTickets");
          }}
          className="bg-[#5669FF] h-[60px] flex-row w-[275px] rounded-[13px] justify-center items-center"
        >
          <View className="w-[220px]">
            <Text className="text-white text-center ml-7 font-bold">
              BUY TICKET NLE{price}
            </Text>
          </View>
          <View className="h-[32px] w-[32px] justify-center items-center rounded-full bg-[#3D56f0]">
            <AntDesign name="arrowright" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
