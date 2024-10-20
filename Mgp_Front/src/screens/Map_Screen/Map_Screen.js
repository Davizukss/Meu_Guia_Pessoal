import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LocalContext } from '../../Context/LocalContext.js'; 
import Pesquisa from '../../Components/Pesquisa/Pesquisa.js';

const MapScreen = () => {
  const { localData } = useContext(LocalContext);  

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
      >
        {localData.length > 0 && localData.map((local, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: local.latitude, longitude: local.longitude }}
            title={local.name}
          />
        ))}
      </MapView>
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
