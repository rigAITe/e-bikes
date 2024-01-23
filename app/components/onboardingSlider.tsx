import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import Text from './common/Typography'
import { FONTSIZE, SCREEN_SIZE } from '../styles/sizes'

interface Props {
  head?: string;
  text?: string;
  key?: string;
  images?: any
}

const OnboardingSlider: React.FC<Props> = ({ head, text, key, images }) => {
  return (
    <View key={key} style={styles.center}>
      <Image
        source={images}
        style={{
          resizeMode: "contain",
          height: 380,
          marginBottom: 85,
          marginRight: -61
        }}
      />
      <Text variant="xl" color="#041C2E" style={styles.textWidth}>
        {head}
      </Text>
      <Text variant="sm" color="#96823D" style={{ ...styles.textWidth, paddingTop: FONTSIZE.font8 }}>
        {text}
      </Text>
    </View>
  )
}

export default OnboardingSlider

const styles = StyleSheet.create({
  textWidth: {
    maxWidth: SCREEN_SIZE.width / 1.6,
    textAlign: "center",
  },
  center: {
    alignItems: "center",
  },
})