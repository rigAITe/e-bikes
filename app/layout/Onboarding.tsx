import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { ROUTES } from "../constants/routes";
import { FONTSIZE, SCREEN_SIZE } from "../styles/sizes";
import Text from "../components/common/Typography";
import OnboardingSlider from "../components/onboardingSlider";
import BlackContainer from "../components/common/blackContainer";
import { icons, images } from "../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface CircleIndicatorProps {
  active: boolean;
  inactiveColor: string
}

export const CircleIndicator: React.FC<CircleIndicatorProps> = ({
  inactiveColor,
  active,
}) => (
  <View
    style={{
      ...styles.circleIndicator,
      backgroundColor: active ? 'black' : inactiveColor,
    }}
  />
);

const Onboarding: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();


  const pagerRef = useRef<PagerView>(null);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={{ ...styles.main, backgroundColor: '#FFCE23' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#FFCE23'}
      />
      <PagerView
        style={styles.pagerView}
        ref={pagerRef}
        initialPage={0}
        collapsable={false}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        <OnboardingSlider images={images.onboarding} head="Welcome to E-Bikes" text="Buying Electric bikes just got a lot easier, Try us today." key="1" />
        <OnboardingSlider images={images.onboarding} head="Go Green, Go Electric" text="Join the electric revolution!" key="2" />
        <OnboardingSlider images={images.onboarding} head="Explore our Collection" text="Discover a wide range of electric bikes in our collection" key="3" />
      </PagerView>
      <View
        style={styles.indicatorContainer}
      >
        {[...Array(3)].map((_, i) => (
          <CircleIndicator key={i} active={i === currentPage} inactiveColor="white"/>
        ))}
      </View>
      <View style={styles.options}>
        <BlackContainer onPress={() => navigation.navigate(ROUTES.tabNav, { screen: ROUTES.tab })}>
          <View
            style={styles.blackContainer}
          >
            <View style={styles.googleContainer}>
              <Image source={icons.google} style={styles.google} />
            </View>
            <View>
              <Text color="#fff" variant="smR">Login with Google</Text>
            </View>
            <View style={{ width: 24 }} />
          </View>
        </BlackContainer>
        <View style={styles.signUp}>
          <Text variant="smR" color="#96823D" style={styles.account}>Don’t have any account?</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text variant="smSB">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  center: {
    alignItems: "center",
  },
  options: {
    paddingHorizontal: SCREEN_SIZE.paddingHorizontal,
    marginBottom: FONTSIZE.font48,
  },
  circleIndicator: {
    width: FONTSIZE.font8,
    height: FONTSIZE.font8,
    borderRadius: 50,
  },
  indicatorContainer: {
    flexDirection: "row",
    gap: FONTSIZE.font10,
    alignSelf: "center",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 100 : 215,
  },
  google: {
    borderRadius: 50,
    width: 24,
    height: 24,
    padding: 4
  },
  signUp: {
    marginTop: FONTSIZE.font48,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  googleContainer: {
    backgroundColor: "#FFF",
    padding: FONTSIZE.font4,
    borderRadius: 50
  },
  account: {
    paddingRight: FONTSIZE.font8,
    fontSize: 14
  },
  blackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
