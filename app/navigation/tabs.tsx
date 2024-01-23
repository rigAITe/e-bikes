import React, { useCallback } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRootStackParamList } from "./types/bottomTab/tabNavigatorType";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeNavigator from "./homeNavigator";
import Bookmark from "../layout/Bookmark";
import Settings from "../layout/Settings";
import History from "../layout/History";
import BottomTabIcon from "../components/bottomTabIcon";

type TabRouteProp = RouteProp<TabRootStackParamList, "TAB">;
type TabNavigationProp = StackNavigationProp<TabRootStackParamList, "TAB">;

type TabProps = {
  route: TabRouteProp;
  navigation: TabNavigationProp;
};

const Tab = createBottomTabNavigator();

const BottomTab: React.FC<TabProps> = ({ route, navigation }) => {
  const [animatedValue, setAnimatedValue] = React.useState(
    new Animated.Value(0),
  );
  const [focused, setFocused] = React.useState("HOME");

  useFocusEffect(
    useCallback(() => {
      if (route?.params?.params.routeName) {
        setFocused(route?.params?.params.routeName);
      }
    }, [route?.params?.params.routeName]),
  );

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: focused ? 1 : 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, focused]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        freezeOnBlur: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F1F6FB',
          borderTopWidth: 0,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        // component={Home}
        component={HomeNavigator} // if you want the bottome tab to persist use navigator
        options={{
          tabBarIcon: () => {
            return (
              <BottomTabIcon
                focused={focused}
                icon="HOME"
                animatedValue={animatedValue}
              />
            );
          },
        }}
      listeners={() => ({
        tabPress: () => {
          setAnimatedValue(new Animated.Value(0));
          setFocused("HOME");
        },
      })}
      />
      <Tab.Screen
        name="BOOKMARK"
        component={Bookmark}
        options={{
          tabBarIcon: () => {
            return (
              <BottomTabIcon
                focused={focused}
                icon="BOOKMARK"
                animatedValue={animatedValue}
              />
            );
          },
        }}
        listeners={() => ({
          tabPress: () => {
            setAnimatedValue(new Animated.Value(0));
            setFocused("BOOKMARK");
          },
        })}
      />

      <Tab.Screen
        name="HISTORY"
        component={History}
        options={{
          tabBarIcon: () => {
            return (
              <BottomTabIcon
                focused={focused}
                icon="HISTORY"
                animatedValue={animatedValue}
              />
            );
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            // setAnimatedValue(new Animated.Value(0));
            // setFocused("HISTORY");
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="SETTINGS"
        component={Settings}
        options={{
          tabBarIcon: () => {
            return (
              <BottomTabIcon
                focused={focused}
                icon="SETTINGS"
                animatedValue={animatedValue}
              />
            );
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            // setAnimatedValue(new Animated.Value(0));
            // setFocused("SETTINGS");
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
