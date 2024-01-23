import React, { useState, useEffect } from 'react';
import { View, StatusBar, Dimensions, Image, StyleSheet, Platform } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapHeader from '../components/common/mapHeader';
import Input from '../components/common/input';
import { FONTSIZE } from '../styles/sizes';

const MapComponent: React.FC = () => {
  const { height } = Dimensions.get('window');

  const [initialRegion, setInitialRegion] = useState({
    latitude: 6.59558026042743,
    longitude: 3.3365465061231157,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState({
    latitude: 6.5915726599708675,
    longitude: 3.340924077981382,
  });

  const [destination, setDestination] = useState({
    latitude: 6.613297091304463,
    longitude: 3.342053821466529
  });

  const [polylineCoordinates, setPolylineCoordinates] = useState([]);

  useEffect(() => {
    // Fetch directions from Google Maps Directions API
    const getDirections = async () => {
      try {
        const apiKey = 'AIzaSyBiikOqxgT2aw_rPDJSOdtTnJG3dAE5C1U';
        const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destination.latitude},${destination.longitude}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK') {
          const points = data.routes[0].overview_polyline.points;
          const decodedPoints = decodePolyline(points);
          setPolylineCoordinates(decodedPoints);
        } else {
          console.error('Failed to fetch directions:', data.status);
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    getDirections();
  }, [location, destination]);

  // Helper function to decode polyline points
  const decodePolyline = (encoded: any) => {
    const points = [];
    let index = 0;
    const len = encoded.length;
    let lat = 0;
    let lng = 0;

    while (index < len) {
      let b;
      let shift = 0;
      let result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }

    return points;
  };

  return (
    <View style={{ height: height }}>
      <StatusBar hidden />

      <MapView
        style={{ flex: 1, height: height }}
        initialRegion={initialRegion}
      >
        <Marker coordinate={location} title="Current Location">
          <Image source={require('../assets/icons/location1.png')} style={{ width: 40, height: 40 }} />
        </Marker>

        <Marker coordinate={destination} title="Destination">
          <Image source={require('../assets/icons/location2.png')} style={{ width: 20, height: 20 }} />
        </Marker>
        <Polyline
          coordinates={polylineCoordinates}
          strokeColor="#3498db"
          strokeWidth={2}
        />
      </MapView>
      <View style={styles.map}>
        <MapHeader />
      </View>
      <View style={{
        alignItems: 'center',
        marginTop: FONTSIZE.font24,
        position: 'absolute',
        top: 90,
        left: 0,
        right: 0,
        paddingHorizontal: FONTSIZE.font24,
        backgroundColor: '#FFD337',
        borderRadius: 50,
        paddingVertical: FONTSIZE.font16,
        justifyContent: 'center', // Center vertically
        marginHorizontal: 40
      }}>
        <View style={{
          width: '100%', // Take up the full width of the yellow box
        }}>
          <Input editable={false} placeholder='SCP6653728497' style={{textAlign: 'center'}}/>
        </View>
      </View>

    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 30,
  }
})