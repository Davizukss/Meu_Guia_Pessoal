import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Introduction_Screen from './src/screens/Introduction_Screen/Introduction_Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4A4DA1"/>
      <Introduction_Screen />
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
