import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Linking, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { LocalContext } from '../../Context/LocalContext.js';
import Pesquisa from '../../Components/Pesquisa/Pesquisa.js';
import MapViewDirections from 'react-native-maps-directions';
import central from "../../assets/Stack_Images/central.png";
import AntDesign from '@expo/vector-icons/AntDesign';

const MapScreen = () => {
  const { localData, clearLocalData, setLocalData } = useContext(LocalContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState({ origin: null, destination: null, waypoints: [] });

  const GOOGLE_MAPS_APIKEY = '';

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada!');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocationLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (userLocation && localData.length > 0) {
      const distances = localData.map(local => ({
        local,
        distance: getDistance(userLocation, local),
      }));

      const farthest = distances.reduce((prev, curr) => (prev.distance > curr.distance ? prev : curr));

      setRouteCoordinates({
        origin: userLocation,
        destination: farthest.local,
        waypoints: distances
          .filter(d => d.local !== farthest.local)
          .map(d => d.local),
      });

      setShowRoute(true);
    }
  }, [userLocation, localData]);

  const getDistance = (pointA, pointB) => {
    const R = 6371;
    const dLat = (pointB.latitude - pointA.latitude) * (Math.PI / 180);
    const dLon = (pointB.longitude - pointA.longitude) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(pointA.latitude * (Math.PI / 180)) * Math.cos(pointB.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const openMaps = () => {
    const waypoints = routeCoordinates.waypoints.map(local => `${local.latitude},${local.longitude}`).join('|');
    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${routeCoordinates.destination.latitude},${routeCoordinates.destination.longitude}&waypoints=${waypoints}&travelmode=driving`;
    Linking.openURL(url);
  };

  const centerMapOnUser = () => {
    if (userLocation) {
      mapRef.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }, 1000);
    }
  };

  let mapRef;

  const removeLocalFromRoute = (localToRemove) => {
    const updatedLocalData = localData.filter(local => local !== localToRemove);
    setLocalData(updatedLocalData);

    const updatedWaypoints = routeCoordinates.waypoints.filter(local => local !== localToRemove);
    let updatedDestination = routeCoordinates.destination;

    if (routeCoordinates.destination === localToRemove) {
      updatedDestination = updatedWaypoints.length > 0 ? updatedWaypoints[0] : null;
    }

    setRouteCoordinates(prev => ({
      ...prev,
      waypoints: updatedWaypoints,
      destination: updatedDestination,
    }));

    if (updatedLocalData.length === 0) {
      setModalVisible(false);
      setShowRoute(false);
    }
  };

  return (
    <View style={styles.container}>
      {locationLoaded && (
        <MapView
          ref={ref => { mapRef = ref; }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {localData.length > 0 && localData.map((local, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: local.latitude, longitude: local.longitude }}
              title={local.name}
              pinColor="#3C3F89"
            />
          ))}

          {showRoute && routeCoordinates.origin && routeCoordinates.destination && (
            <MapViewDirections
              origin={routeCoordinates.origin}
              destination={routeCoordinates.destination}
              waypoints={routeCoordinates.waypoints.map(local => ({
                latitude: local.latitude,
                longitude: local.longitude,
              }))}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="blue"
              onError={(errorMessage) => {
                console.log('GOT AN ERROR', errorMessage);
              }}
            />
          )}
        </MapView>
      )}

      <Pesquisa />

      {showRoute && localData.length > 0 && (
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Ver Roteiro</Text>
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <AntDesign name="close" size={30} style={styles.seta} />
          </TouchableOpacity>
          <Text style={styles.modalText}>Roteiro Turístico</Text>
          {localData.map((local, index) => (
            <View key={index} style={styles.localContainer}>
              <Text style={styles.localText}>{local.name}</Text>
              <TouchableOpacity onPress={() => removeLocalFromRoute(local)}>
                <AntDesign name="close" size={25} style={styles.removeLocal} />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.buttonMaps} onPress={openMaps}>
            <Text style={styles.buttonTextMaps}>Iniciar Rota (Maps)  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton} onPress={() => {
            clearLocalData();
            setShowRoute(false);
            setModalVisible(false);
          }}>
            <Text style={styles.buttonText}>Remover Rota</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.centerButton} onPress={centerMapOnUser}>
        <Image  style={styles.centerButtonimg} source={central} />
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    top: 490,
    left: '5%',
    zIndex: 1,
  },
  centerButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 90,
    alignItems: 'center',
    position: 'absolute',
    bottom: 300,
    right: 20,
    zIndex: 1,
  },
  centerButtonimg:{
    height: 28,
    width: 28,
  },
  modalView: {
    zIndex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  localContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    bottom: 30,
  },
  localText: {
    fontSize: 16,
  },
  removeLocal: {
    color: '#3C3F89',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#3C3F89',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonTextMaps: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonMaps: {
    marginTop: 20,
    backgroundColor: '#3C3F89',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  seta: {
    bottom: 17,
    color: '#3C3F89',
  },
  modalText: {
    color: '#3C3F89',
    bottom: 60,
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default MapScreen;
