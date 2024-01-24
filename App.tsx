import * as React from "react";
import { enableLatestRenderer } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RootNavigator from "./app/navigation/rootNavigator";
function App(): JSX.Element {
  enableLatestRenderer();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>

  )
}

export default App;
