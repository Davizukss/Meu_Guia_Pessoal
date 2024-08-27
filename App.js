import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Organizador_Screen from './src/screens/login_Screen/organizador_Screen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4A4DA1"/>
      <Organizador_Screen/>
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
