import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapScreen from '../screens/Map_Screen/Map_Screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import seta from "../assets/Stack_Images/voltar.png";
import Perfil from '../Components/Perfil/Perfil'; 

const Drawer = createDrawerNavigator();

function DrawerContent() {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity style={styles.seta} onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={seta} />
      </TouchableOpacity>
      <Perfil /> 
    </View>
  );
}

const CustomHeaderButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.headerButton}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="menu" size={29} color="#3C3F89" />
      </View>
    </TouchableOpacity>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerLeft: () => <CustomHeaderButton />,
        headerTransparent: true,
        headerTitle: '',
        headerShadowVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        drawerStyle: {
          width: 300,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          overflow: 'hidden',
          elevation: 5,
        },
        headerPressable: false,
        headerTintColor: 'transparent',
      }}
    >
      <Drawer.Screen name="map" component={MapScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  seta: {
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  headerButton: {
    marginLeft: 25,
    marginTop: 70,
    height: 70,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 120,
    padding: 8,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerNavigator;
