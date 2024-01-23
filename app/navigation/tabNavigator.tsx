import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import BottomTab from "./tabs";
import SettingsNavigator from "./settingsNavigator";
// import OrderNavigator from "./orderNavigator";
// import ProfileNavigator from "./profileNavigator";
import { TabRootStackParamList } from "./types/bottomTab/tabNavigatorType";
import HomeNavigator from "./homeNavigator";
import HistoryNavigator from "./historyNavigator";
import BookmarkNavigator from "./bookmarkNavigator";
import TrackingDetails from "../layout/TrackingDetails";

const Stack = createNativeStackNavigator<TabRootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.tab as "TAB"}
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.homeNav as "HOMENAV"}
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.trackingDetails as "TRACKINGDETAILS"}
        component={TrackingDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.settingsNav as "SETTINGSNAV"}
        component={SettingsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.bookmarkNav as "BOOKMARKNAV"}
        component={BookmarkNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.historyNav as "HISTORYNAV"}
        component={HistoryNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default TabNavigator;
