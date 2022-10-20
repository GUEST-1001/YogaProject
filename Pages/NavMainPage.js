import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-web";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./MainPage";
import CoursePage from "./CoursePage";


const Stack = createNativeStackNavigator();

const NavMainPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerStyle: { backgroundColor: "#63E0A3" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen
        name="CoursePage"
        component={CoursePage}
        options={{
          headerTitle: "",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default NavMainPage
