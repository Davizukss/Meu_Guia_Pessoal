
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Organizador_Screen from '../screens/Organizador_Screen/Organizador_Screen'; 
import Cadastro_Cliente_Screen from '../screens/Cadastro_Cliente_Screen/Cadastro_Cliente_Screen'; 
import Login_Screen from '../screens/Login_Screen/Login_Screen.js'; 
import TelaInicial from '../screens/Introduction_Screen/Introduction_Screen'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TelaInicial">
                <Stack.Screen name="TelaInicial" component={TelaInicial}   options={{ headerShown: false }} />
                <Stack.Screen name="TelaCadastroOrg" component={Organizador_Screen}   options={{ headerShown: false }} />
                <Stack.Screen name="TelaCadastroClie" component={Cadastro_Cliente_Screen}   options={{ headerShown: false }} />
                <Stack.Screen name="TelaLogin" component={Login_Screen}   options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
