import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { icons } from "../constants";
import { FONTFAMILY, FONTSIZE } from "../styles/sizes";

const Direction = {
  HOME: icons.home,
  SETTINGS: icons.Heart,
  HISTORY: icons.Cart,
  BOOKMARK: icons.Markey,
} as const;

type ICON = "HOME" | "SETTINGS" | "BOOKMARK" | "HISTORY";

interface Props {
  focused?: string;
  icon: ICON;
  setanimatedValue?: () => void;
  animatedValue: any;
}

const BottomTabIcon: React.FC<Props> = ({
  focused,
  icon,
  animatedValue,
}) => {
  function tabIcon(data: any) {
    switch (data) {
      case "HOME":
        return Direction.HOME;
      case "SETTINGS":
        return Direction.SETTINGS;
      case "HISTORY":
        return Direction.HISTORY;
      case "BOOKMARK":
        return Direction.BOOKMARK;
      default:
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={tabIcon(icon)}
        resizeMode="cover"
        style={{
          tintColor: focused === icon ? 'black' : '#BBBFD0',
          ...styles.iconsStyle,
        }}
      />
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  iconsStyle: {
    width: FONTSIZE.font24,
    height: FONTSIZE.font24,
  },
});
