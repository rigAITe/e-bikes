import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

const Settings = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Text>Settings Page</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})