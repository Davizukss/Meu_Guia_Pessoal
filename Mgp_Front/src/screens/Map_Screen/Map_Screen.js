import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapView from 'react-native-maps';
import Pesquisa from '../../Components/Pesquisa/Pesquisa.js';

const MapScreen = () => {
  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
