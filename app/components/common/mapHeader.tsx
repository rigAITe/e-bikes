import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../constants'
import Text from './Typography'
import { FONTSIZE } from '../../styles/sizes'
import { useNavigation } from '@react-navigation/native'

const MapHeader = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.mapHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={icons.back} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <Text variant='lgB'>Tracking Details</Text>
      <View style={{ width: 40, height: 40 }} />
    </View>
  )
}

export default MapHeader

const styles = StyleSheet.create({
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: FONTSIZE.font24
  }
})