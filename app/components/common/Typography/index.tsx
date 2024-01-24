import {
  StyleSheet,
  Text as NativeText,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { FONTFAMILY, FONTSIZE } from '../../../styles/sizes';

type Variant = 'xl' | 'lgB' | 'lgSB' | 'md' | 'smSB' | 'smR' | 'sm' | 'xs';
type EllipsizeMode = 'clip' | 'head' | 'middle' | 'tail';

interface Props {
  children: React.ReactNode;
  style?: any;
  variant?: Variant;
  color?: string;
  numberOfLines?: number;
  ellipsizeMode?: EllipsizeMode;
}

const Text: React.FC<Props> = ({
  children,
  style,
  numberOfLines,
  variant = 'md',
  color = '#041C2E',
  ellipsizeMode,
}) => {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: FONTFAMILY.normal,
    },
    xl: {
      fontSize: FONTSIZE.font24,
      fontFamily: FONTFAMILY.bold,
      fontWeight: '700',
    },
    lgB: {
      fontSize: FONTSIZE.font18,
      fontFamily: FONTFAMILY.bold,
      fontWeight: '700',
    },
    lgSB: {
      fontSize: FONTSIZE.font18, // NORMAL FONT
      fontFamily: FONTFAMILY.semiBold,
      fontWeight: '600',
    },
    md: {
      fontSize: FONTSIZE.font16,
      fontFamily: FONTFAMILY.semiBold,
      fontWeight: '600',
    },
    smSB: {
      fontSize: FONTSIZE.font14,
      fontFamily: FONTFAMILY.semiBold,
      fontWeight: '700',
    },
    smR: {
      fontSize: FONTSIZE.font14,
      fontFamily: FONTFAMILY.regular,
      fontWeight: '500',
    },
    sm: {
      fontSize: FONTSIZE.font14,
      fontWeight: '400',
      fontFamily: FONTFAMILY.regular
    },
    xs: {
      fontSize: FONTSIZE.font12,
      fontWeight: '400',
      fontFamily: FONTFAMILY.regular
    },
  });

  return (
    <SafeAreaView>
      <NativeText
        adjustsFontSizeToFit
        ellipsizeMode={ellipsizeMode}
        style={{
          color: color, // colors are meant to be described as primary, secondary and so on but we have a long list of color so its imperative to pass thm as a prop
          ...styles.textStyle,
          ...styles[variant],
          ...style,
        }}
        numberOfLines={numberOfLines}>
        {children}
      </NativeText>
    </SafeAreaView>
  );
};

export default Text;

// #041C2E, #96823D, #FFF, #031522, #092C4C, #424242, #031725, #031420, #2E3E5C, #1E3354, #7A809D, #051F32  - Colors used in the project
// 24px-600, 18px-600, 18px-700, 16px-600, 14px-400, 14px-500, 14px-600, 12px-400 - Fontsize and proportional fontweight used in the project
