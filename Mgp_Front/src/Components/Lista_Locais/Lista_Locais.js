import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { locais } from '../../mocks/locaisMocks';

export default function Lista_Locais({ locais }) {
  const navigation = useNavigation();

  // Modificado para enviar o ID correto ao navegar
  const handleImagePress = (id) => {
    navigation.navigate('Local_Screen', { id });  // Passando o ID para a próxima tela
  };

  const handleVerMaisPress = () => {
    console.log('Ver mais pressionado.');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {locais.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleImagePress(item.id)} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay} />
            <Text style={styles.imageText} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleVerMaisPress} style={styles.maisContainer}>
          <Text style={styles.MaisText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
    paddingVertical: 10,
    backgroundColor: '#fff', 
  },
  flatListContent: {
    alignItems: 'center', 
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  image: {
    width: 370,
    height: 120,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 370,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute',
    top: 45,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    width: '60%',
  },
  maisContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  MaisText: {
    color: '#292B5B',
    fontSize: 20,
    fontWeight: '500',
  },
});
