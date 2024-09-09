import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/Home_Screen/Home_Screen';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Text>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TelaCadastroClie')}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
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
          width: 250,
        },
        headerPressable: false, 
        headerTintColor: 'transparent', 
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
