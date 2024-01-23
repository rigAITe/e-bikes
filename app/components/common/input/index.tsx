import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { FONTSIZE } from '../../../styles/sizes'

interface Props {
  editable: boolean;
  placeholder: string;
  style?: any
}

const Input: React.FC<Props> = ({ editable, placeholder, style }) => {
  return (
    <View style={{...styles.container, paddingLeft: editable ? 28 : 0}}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor='#031420'
        editable={editable}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#031420',
    borderRadius: 28,
    paddingVertical: 12
  },
  input: {
    paddingVertical: 0,
    fontSize: FONTSIZE.font14,
  }
})