import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Codigo_Verificacao_Screen from './screens/Codigo_Verificacao_Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4A4DA1"/>
      <Codigo_Verificacao_Screen/>
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