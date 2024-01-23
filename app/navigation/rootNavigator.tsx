import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import AuthNavigator from "./authNavigator";
import TabNavigator from "./tabNavigator";
// import ApiCallResponse from "../components/common/apiCallResponse";

const RootStack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.authNav}
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
          name={ROUTES.tabNav}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
    </RootStack.Navigator>
      // {/* <ApiCallResponse /> */ }
  );
};

export default RootNavigator;
