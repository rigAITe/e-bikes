import { Button, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import { FONTSIZE, SCREEN_SIZE } from '../styles/sizes';
import Text from '../components/common/Typography';
import BlackContainer from '../components/common/blackContainer';
import { icons, images } from '../constants';
import Input from '../components/common/input';
import TrackHistory from '../components/common/trackHistory';

const Order: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }} showsVerticalScrollIndicator={false}>
      <Text variant='lgB' style={{ paddingHorizontal: FONTSIZE.font24 }}>Hello good Morning!</Text>
      <View style={{ paddingHorizontal: FONTSIZE.font24, paddingVertical: 37 }}>
        <View style={{ backgroundColor: '#FFD337', paddingHorizontal: FONTSIZE.font24, paddingVertical: 32, borderRadius: 32 }}>
          <View>
            <Text variant='lgSB'>
              Track Your Package
            </Text>
            <Text variant='sm' color='#96823D' style={{ paddingTop: FONTSIZE.font8 }}>
              Enter the receipt number that has been given by the officer
            </Text>
          </View>
          <View style={{ marginTop: FONTSIZE.font24 }}>
            <Input editable={true} placeholder='Enter the receipt number' />
          </View>
          <BlackContainer style={styles.orderContainer} onPress={() => navigation.navigate(ROUTES.trackingDetails)}>
            <View style={styles.order} >
              <Text variant='smSB' color='white'>Track Now</Text>
              <Image source={icons.arrow} style={styles.arrow} />
            </View>
          </BlackContainer>
        </View>
        <View style={{ marginTop: 40, marginBottom: FONTSIZE.font16 }}>
          <Text variant='md' color='#2E3E5C'>Tracking history</Text>
        </View>
        <View>
          <TrackHistory head='SCP9374826473' text='In the process' image1={images.history1} component={<Image source={icons.direction} style={styles.direction} />} />
          <TrackHistory head='SCP6653728497' text='In delivery' image1={images.history2} component={<Image source={icons.direction} style={styles.direction} />} />
        </View>
      </View>
    </ScrollView>
  );
};


export default Order

const styles = StyleSheet.create({
  orderContainer: { paddingHorizontal: 29, paddingVertical: FONTSIZE.font16, marginTop: FONTSIZE.font10 },
  order: { flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', gap: 21 },
  arrow: { width: FONTSIZE.font22, height: 14 },
  direction: { width: FONTSIZE.font12, height: FONTSIZE.font12 },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})