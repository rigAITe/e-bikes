import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import { HomeRootStackParamList } from "./types/home/homeNavigatorType";
import Home from "../layout/Home";
import Order from "../layout/Order";
import HomeHeader from "../components/homeHeader";

const Stack = createNativeStackNavigator<HomeRootStackParamList>();

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HomeHeader />, // Use HomeHeader as a custom header
      }}
    >
      <Stack.Screen name={ROUTES.homepage as "HOMEPAGE"} component={Home} />
      <Stack.Screen name={ROUTES.order as "ORDER"} component={Order} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
