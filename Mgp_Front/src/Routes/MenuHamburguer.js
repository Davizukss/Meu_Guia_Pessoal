import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/Home_Screen/Home_Screen';
import { useNavigation } from '@react-navigation/native'; 
const Drawer = createDrawerNavigator();
function DrawerContent() {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContent}>
     <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}><Text>Logar</Text></TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('TelaCadastroClie')}><Text>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        drawerLabel: () => null,
      }}
    >
      <Drawer.Screen name=" " component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 2,
  },
});

export default DrawerNavigator;
