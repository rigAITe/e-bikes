import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import Text from "../components/common/Typography";
import { SettingsRootStackParamList } from "./types/settings/settingsNavigatorType";
import Settings from "../layout/Settings";

const Stack = createNativeStackNavigator<SettingsRootStackParamList>();

const SettingsNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.settings as "SETTINGS"} component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
