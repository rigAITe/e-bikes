import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import Onboarding from "../layout/Onboarding";
import { AuthRootStackParamList } from "./types/auth/authNavigatorType";

const Stack = createNativeStackNavigator<AuthRootStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.onboarding as "ONBOARDING"}
        component={Onboarding}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
