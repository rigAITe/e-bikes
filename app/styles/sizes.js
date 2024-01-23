import Metrics from './metrics';
import { moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

// BORDER RADIUS = FONTSIZE
// PADDINGHORIZONTAL = SCREENSIZE.FONTSIZE
// PADDINGVERTICAL || TOP || BOTTOM = FONTSIZE
// MARGINHORIZONTAL = SCREENSIZE.FONTSIZE
// MARGINGVERTICAL || TOP || BOTTOM = FONTSIZE
// IMAGE = SCREENSIZE

const roundFontSize = (value, one) => {
  let responsiveValue = Math.round(moderateScale(value));
  // console.log(one, responsiveValue)
  return responsiveValue;
};

export const FONTSIZE = {
  font1: roundFontSize(1),
  font4: roundFontSize(4),
  font5: roundFontSize(5),
  font7: roundFontSize(6),
  font8: roundFontSize(7),
  font10: roundFontSize(9),
  font12: roundFontSize(11),
  font13: roundFontSize(12),
  font14: roundFontSize(13),
  font15: roundFontSize(14),
  font16: roundFontSize(15),
  font18: roundFontSize(17),
  font19: roundFontSize(17.5),
  font20: roundFontSize(18),
  font21: roundFontSize(19.5),
  font22: roundFontSize(20),
  font24: roundFontSize(22),
  font48: roundFontSize(44),
};

export const WEIGHT = {
  thin: '100',
  light: '200',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  veryBold: '900',
};

const roundPaddingSize = (value, figure) => {
  let responsiveValue = Math.round(Metrics.screenWidth / value);
  // console.log(figure, "is", responsiveValue);
  return responsiveValue;
};

export const SCREEN_SIZE = {
  fiexedHeight: Metrics.fiexedHeight,
  width: Metrics.screenWidth,
  height: Metrics.screenHeight,
  padding4: roundPaddingSize(FONTSIZE.font4, '4'),
  padding5: roundPaddingSize(FONTSIZE.font5, '5'),
  padding8: roundPaddingSize(FONTSIZE.font8, '8'),
  padding10: roundPaddingSize(FONTSIZE.font10, '10'),
  padding12: roundPaddingSize(FONTSIZE.font12, '12'),
  padding13: roundPaddingSize(FONTSIZE.font13, '13'),
  padding14: roundPaddingSize(FONTSIZE.font14, '14'),
  padding15: roundPaddingSize(FONTSIZE.font15, '15'),
  padding16: roundPaddingSize(FONTSIZE.font16, '16'),
  padding18: roundPaddingSize(FONTSIZE.font18, '18'),
  padding19: roundPaddingSize(FONTSIZE.font19, '19'),
  padding20: roundPaddingSize(FONTSIZE.font20, '20'),
  padding21: roundPaddingSize(FONTSIZE.font21, '21'),
  padding22: roundPaddingSize(FONTSIZE.font22, '22'),
  paddingHorizontal: FONTSIZE.font24,
  imageHeight: Metrics.imageHeight,
};

export const generalStyle = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: FONTSIZE.font1,
    borderStyle: 'solid',
  },
  profileSize: {
    width: FONTSIZE.font50,
    height: FONTSIZE.font50,
    borderRadius: FONTSIZE.font10,
  },
  iconSize: {
    width: FONTSIZE.font16,
    height: FONTSIZE.font16,
    marginVertical: FONTSIZE.font5,
  },
});

export const FONTFAMILY = {
  thin: 'Inter-Thin',
  light: 'Inter-Light',
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-Semibold',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  normal: 'Inter-Black',
};
