import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  fiexedHeight: height,
  imageHeight: 362 * (width / 541),
};

export default metrics;
