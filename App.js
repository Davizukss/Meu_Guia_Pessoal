import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Introduction_Screen from './src/screens/Introduction_Screen/Introduction_Screen';
import Login_Screen from './src/screens/Login_Screen/Login_Screen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4A4DA1"/>
      <Login_Screen />
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
