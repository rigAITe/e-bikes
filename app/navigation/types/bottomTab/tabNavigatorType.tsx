import {routeParams} from "./types";

export type TabRootStackParamList = {
  TAB: {
    // screen type needed because its nested
    screen: string;
    params: routeParams;
  };
  HOMENAV: undefined;
  HISTORYNAV: undefined;
  SETTINGSNAV: undefined;
  BOOKMARKNAV: undefined;
  TRACKINGDETAILS: undefined
};
