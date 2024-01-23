import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";
import Bookmark from "../layout/Bookmark";
import { BookmarkRootStackParamList } from "./types/bookmark/bookmarkNavigatorType";

const Stack = createNativeStackNavigator<BookmarkRootStackParamList>();

const BookmarkNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.bookmark as "BOOKMARK"} component={Bookmark} />
    </Stack.Navigator>
  );
};

export default BookmarkNavigator;
