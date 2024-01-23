import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import History from "../layout/History";
import { HistoryRootStackParamList } from "./types/history/historyNavigatorType";

const Stack = createNativeStackNavigator<HistoryRootStackParamList>();

const HistoryNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.history as "HISTORY"} component={History} />
    </Stack.Navigator>
  );
};

export default HistoryNavigator;
