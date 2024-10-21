import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Organizador_Screen from './src/screens/Organizador_Screen/Organizador_Screen.js'
import Introduction_Screen from './src/screens/Introduction_Screen/Introduction_Screen.js'
import Cadastro_Cliente_Screen from './src/screens/Cadastro_Cliente_Screen/Cadastro_Cliente_Screen.js'
import Send_Email_Screen from './src/screens/Send_Email_Screen/Send_Email_Screen.js';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4A4DA1"/>
      {/* <Cadastro_Cliente_Screen/> */}
      <Send_Email_Screen/>
      {/* <Introduction_Screen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
