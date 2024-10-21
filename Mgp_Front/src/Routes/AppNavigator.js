import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Map_Screen from '../Routes/MenuHamburguer.js';
import OrganizadorScreen from '../screens/Organizador_Screen/Organizador_Screen';
import CadastroClienteScreen from '../screens/Cadastro_Cliente_Screen/Cadastro_Cliente_Screen';
import LoginScreen from '../screens/Login_Screen/Login_Screen';
import TelaInicial from '../screens/Introduction_Screen/Introduction_Screen';
import Config_Screen from '../screens/Config_Screen/Config_Screen.js';
import Historico_Screen from '../screens/Historico_Screen/Historico_Screen.js';
import Ajuda_Screen from '../screens/Ajuda_Screen/Ajuda_Screen.js';
import Local_Screen from '../Components/Local_Screen/Local_Screen.js'
import { LocalProvider } from '../Context/LocalContext.js';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <LocalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
          <Stack.Screen name="Config_Screen" component={Config_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Historico_Screen" component={Historico_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Ajuda_Screen" component={Ajuda_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="Map_Screen" component={Map_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="TelaCadastroOrg" component={OrganizadorScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TelaCadastroClie" component={CadastroClienteScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TelaLogin" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Local_Screen" component={Local_Screen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalProvider>

  );
}
