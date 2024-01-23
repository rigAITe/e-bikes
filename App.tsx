import * as React from "react";
// Before rendering any navigation stack
// import { enableFreeze } from "react-native-screens";
import { enableLatestRenderer } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./app/navigation/rootNavigator";
function App(): JSX.Element {
  // enableFreeze(true);
  enableLatestRenderer();
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App;
