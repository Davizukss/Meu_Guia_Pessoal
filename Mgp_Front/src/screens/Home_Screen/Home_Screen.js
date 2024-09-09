import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function Home_Screen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      // Solicita permissão
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada');
        return;
      }

      // Localização atual do usuário
      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  const handleRecenter = () => {
    if (mapRef.current && location) {
      mapRef.current.animateToRegion(location, 1000); 
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            ref={mapRef}
            style={styles.map}
            region={location}
            followsUserLocation={true}
          >
            {location && (
              <Marker coordinate={location}>
                <View style={styles.iconContainer}>
                  <Ionicons name="ellipse" size={12} color="#3C3F89" />
                </View>
              </Marker>
            )}
          </MapView>
        ) : (
          <Text style={styles.loadingText}>Carregando mapa...</Text>
        )}
        <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter}>
          <Ionicons name="compass" size={24} color="#3C3F89" />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Pesquisa</Text>
      </View>
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  mapContainer: {
    height: 550,
    width: '100%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  innerContainer: {
    padding: 20,
  },
  text: {
    color: '#fff',
  },
  loadingText: {
    color: '#000',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  recenterButton: {
    position: 'absolute',
    bottom: 20, 
    right: 20, 
    backgroundColor: '#fff', 
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});
