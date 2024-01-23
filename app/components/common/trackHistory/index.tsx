import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../Typography'
import { icons, images } from '../../../constants'
import { FONTSIZE } from '../../../styles/sizes'

interface Props {
  image1: any;
  head: string;
  text: string;
  component?: JSX.Element;
}

const TrackHistory: React.FC<Props> = ({image1, head, text, component}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.bg}>
          <Image source={image1} style={{ width: 24, height: 24 }} />
        </View>
        <View>
          <Text variant="smR" color="#1E3354" style={{ paddingBottom: 6 }}>{head}</Text>
          <Text variant="sm" color="#7A809D">{text}</Text>
        </View>
      </View>
      <View>
        {component}
      </View>
    </View>
  )
}

export default TrackHistory

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: FONTSIZE.font24 },
  firstContainer: { flexDirection: 'row', alignItems: 'center', gap: FONTSIZE.font16 },
  direction: { width: FONTSIZE.font12, height: FONTSIZE.font12 },
  bg: { backgroundColor: '#F1F6FB', padding: 16, borderRadius: 50 }
})