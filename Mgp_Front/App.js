import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import AppNavigator from './src/Routes/AppNavigator'; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A4DA1" />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
