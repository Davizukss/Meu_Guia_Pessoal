import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Introduction_Screen from './src/screens/Introduction_Screen/Introduction_Screen';
import Tela_Cadastro_Cliente from "./src/screens/Tela_Cadastro_Cliente/Tela_Cadastro_Cliente.js"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar backgroundColor="#4A4DA1"/>
    //   <Introduction_Screen />
    // </View>
    <Tela_Cadastro_Cliente/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
