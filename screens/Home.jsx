import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Food");
  };

  return (
    <LinearGradient
      colors={["purple", "white"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="items-center font-bold">
        <Text className="text-2xl ">Choose the Area that you need</Text>
      </View>
      <View className="grid grid-rows-4 h-screen  justify-evenly ">
        <View className="items-center  ">
          <Button
            title="Food Locations"
            onPress={pressHandler}
            color="#936c89"
            className=" rounded-full opacity-50"
          ></Button>
        </View>
        <View className=" items-center">
          <Button
            title="Clothing Locations"
            onPress={pressHandler}
            color="#936c89"
            className="  rounded-md hover:opacity-75"
          ></Button>
        </View>
        <View className=" items-center ">
          <Button
            title="Shelter Locations"
            onPress={pressHandler}
            color="#936c89"
            className="rounded-md "
          ></Button>
        </View>
        <View />
      </View>
    </LinearGradient>
  );
};

export default Home;
