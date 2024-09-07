import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Home_Screen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Mapa</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>Pesquisa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  innerContainer: {
    padding: 20,
  },
});
