import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { FONTSIZE } from '../../../styles/sizes'

interface Props {
  children: JSX.Element;
  style?: StyleProp<ViewStyle>; // Adjusted type for style prop
  onPress: () => void;
}

const BlackContainer: React.FC<Props> = ({ children, onPress, style,  ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.container, style]} {...props}>
      {children}
    </TouchableOpacity>
  )
}

export default BlackContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: FONTSIZE.font16,
    borderRadius: 52,
  }
})