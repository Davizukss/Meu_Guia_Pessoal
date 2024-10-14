import React from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Vinicula from '../../assets/Stack_Images/Lista_Locais/Vinicula.png';
import Zulai from '../../assets/Stack_Images/Lista_Locais/Zulai.png';
import Liberdade from '../../assets/Stack_Images/Lista_Locais/Liberdade.png';
import TeatroMunicipal from '../../assets/Stack_Images/Lista_Locais/TeatroMunicipal.png';

const locais = [
  { id: '1', image: Vinicula, title: 'Vinícola - São Roque' },
  { id: '2', image: Zulai, title: 'Templo Zulai - Cotia' },
  { id: '3', image: TeatroMunicipal, title: 'Teatro Municipal - São Paulo' },
  { id: '4', image: Liberdade, title: 'Liberdade - São Paulo' },
];

export default function Lista_Locais() {
  const handleImagePress = (id) => {
    console.log(`Imagem com ID ${id} pressionada.`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.id)} style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay} />
      <Text style={styles.imageText} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={locais}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 370,
    height: 120,
    marginBottom: 10,
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
});
