import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SessionScreen } from "../screens/SessionScreen";
import { Leaderboard } from "../screens/Leaderboard";
import { HomeScreen } from "../screens/HomeScreen";
import { AccountScreen } from "../screens/AccountScreen";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Session" component={SessionScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
