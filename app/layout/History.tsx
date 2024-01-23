import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

const History = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text>History Page</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})