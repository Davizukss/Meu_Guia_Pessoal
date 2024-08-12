import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Introduction_Screen from './src/screens/Introduction_Screen/Introduction_Screen';
import Login_CLiente from "./src/screens/Tela_login_cliente/Tela_Login_Cliente"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar backgroundColor="#4A4DA1"/>
    //   <Introduction_Screen />
    // </View>
    <Login_CLiente/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
