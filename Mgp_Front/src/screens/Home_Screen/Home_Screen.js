import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Pesquisa from '../../Components/Pesquisa/Pesquisa.js';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.550520,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Pesquisa /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "70%",
    width: "100%",
  },
});

export default MapScreen;
