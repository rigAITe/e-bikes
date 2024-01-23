import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import { SCREEN_SIZE } from '../styles/sizes'

const HomeHeader = () => {
  return (
    <View style={{ paddingVertical: SCREEN_SIZE.paddingHorizontal, paddingHorizontal: SCREEN_SIZE.paddingHorizontal, backgroundColor: 'white' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#fff'}
      />
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={images.profilePix} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={icons.notification} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48
  },
  icon: {
    width: 40,
    height: 40
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})