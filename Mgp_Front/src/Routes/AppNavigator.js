import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home_Screen from '../Routes/MenuHamburguer.js';
import OrganizadorScreen from '../screens/Organizador_Screen/Organizador_Screen';
import CadastroClienteScreen from '../screens/Cadastro_Cliente_Screen/Cadastro_Cliente_Screen';
import LoginScreen from '../screens/Login_Screen/Login_Screen';
import TelaInicial from '../screens/Introduction_Screen/Introduction_Screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="Home_Screen" component={Home_Screen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaCadastroOrg" component={OrganizadorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaCadastroClie" component={CadastroClienteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaLogin" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
