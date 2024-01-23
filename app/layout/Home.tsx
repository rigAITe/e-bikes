import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import { FONTSIZE, SCREEN_SIZE } from '../styles/sizes';
import Text from '../components/common/Typography';
import BlackContainer from '../components/common/blackContainer';
import { icons } from '../constants';
import LottieView from 'lottie-react-native';
import { CircleIndicator } from './Onboarding';


const Carousel: React.FC = () => {
  const data = [
    { id: '0', source: require('../assets/images/bicycle.png') },
    { id: '1', source: require('../assets/images/bicycle.png') },
    { id: '2', source: require('../assets/images/bicycle.png') },
    { id: '3', source: require('../assets/images/bicycle.png') },
    { id: '4', source: require('../assets/images/bicycle.png') },
    { id: '5', source: require('../assets/images/bicycle.png') },
  ];

  const [currentItem, setCurrentItem] = useState(null);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentItem(viewableItems[0].item.id);
    }
  };

  // Calculate the snap interval based on image width and spacing
  const snapInterval = 200 + 80;

  const renderItem = ({ item, index }) => {
    let gyna = {};
    let lastStyle = {};
    let value = data.length - 1;

    if (index === 0) {
      gyna = { marginLeft: FONTSIZE.font20 };
    } else if (index === value) {
      lastStyle = { marginRight: FONTSIZE.font20 };
    }

    const isCurrentItem = item.id === currentItem;
    const overlayStyle = isCurrentItem
      ? {} // No overlay for the current item
      : { backgroundColor: 'rgba(241, 246, 251, 0.80)', borderRadius: 32 }; // Transparent white overlay for non-current items

    const containerStyle = {
      marginRight: index === value ? 0 : 20,
      backgroundColor: '#F1F6FB',
      paddingHorizontal: FONTSIZE.font24,
      paddingVertical: FONTSIZE.font18,
      borderRadius: 32,
    };

    return (
      <View
        style={{
          ...gyna,
          ...lastStyle,
        }}
      >
        <View style={containerStyle}>
          <Image source={item.source} style={styles.image} />
          <View style={[styles.overlay, overlayStyle]} />
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        snapToInterval={snapInterval}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 80, 
        }}
      />
      <View style={styles.indicatorContainer}>
        {[...Array(6)].map((_, i) => (
          <CircleIndicator key={i} active={i == currentItem} inactiveColor="#E5F0FC" />
        ))}
      </View>
    </View>
  );
};


const Home: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }} showsVerticalScrollIndicator={false}>
      <Text variant='lgB' style={styles.hello}>Hello good Morning!</Text>
       <Carousel />
      <View style={styles.main}>
        <View style={styles.group}>
          <View>
            <Text variant='sm' color='#96823D'>Gotten your </Text>
            <Text variant='sm' color='#96823D'>E-Bike yet?</Text>
          </View>
          <BlackContainer style={styles.orderContainer} onPress={() => navigation.navigate(ROUTES.order)}>
            <View style={styles.order} >
              <Text variant='smSB' color='white'>Your Orders</Text>
              <Image source={icons.arrow} style={styles.arrow} />
            </View>
          </BlackContainer>
        </View>
      </View>
      <View style={styles.rider}>
        <View style={{ aspectRatio: 1 }}>
          <LottieView style={{ flex: 1, width: 161, height: 161 }} source={require('../assets/images/bikeman.json')} autoPlay loop />
        </View>
        <View>
          <Text variant='sm'>You too can join our</Text>
          <Text variant='sm'>Elite squad of E-bikers</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  group: { flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' },
  main: { paddingHorizontal: 32, paddingVertical: FONTSIZE.font24, backgroundColor: '#FFD337' },
  orderContainer: { paddingHorizontal: 29, paddingVertical: FONTSIZE.font16 },
  order: { flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', gap: 21 },
  arrow: { width: FONTSIZE.font22, height: 14 },
  hello: { paddingHorizontal: SCREEN_SIZE.paddingHorizontal, marginBottom: 40 },
  rider: { flexDirection: 'row', alignItems: 'center', gap: 30, paddingHorizontal: SCREEN_SIZE.paddingHorizontal, },
  pagerView: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white'
  },
  image: {
    width: 200, 
    height: 200, 
    marginHorizontal: 10,
    borderRadius: 10, 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: "row",
    gap: FONTSIZE.font10,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 25
    // position: "absolute",
    // bottom: 215,
  },
});


