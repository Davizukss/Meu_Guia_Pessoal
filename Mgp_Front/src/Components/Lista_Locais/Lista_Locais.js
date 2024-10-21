import React from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vinicula from '../../assets/Stack_Images/Lista_Locais/Vinicula.png';
import Sp from '../../assets/Stack_Images/Lista_Locais/SaoPaulo.jpg';
import Zulai from '../../assets/Stack_Images/Lista_Locais/Zulai.png';
import Liberdade from '../../assets/Stack_Images/Lista_Locais/Liberdade.png';
import TeatroMunicipal from '../../assets/Stack_Images/Lista_Locais/TeatroMunicipal.png';
import { ScrollView } from 'react-native-gesture-handler';

const locais = [
  { id: '1', image: Sp, title: 'Tour - São Paulo' },
  { id: '2', image: Zulai, title: 'Templo Zulai - Cotia' },
  { id: '3', image: TeatroMunicipal, title: 'Teatro Municipal - São Paulo' },
  { id: '4', image: Liberdade, title: 'Liberdade - São Paulo' },
  { id: '5', image: Vinicula, title: 'Vinícola - São Roque' },
];

export default function Lista_Locais() {
  const navigation = useNavigation();

  const handleImagePress = (id) => {
    if (id === '1') {
      navigation.navigate('Local_Screen');
    } else {
      console.log(`Imagem com ID ${id} pressionada.`);
    }
  };

  const handleVerMaisPress = () => {
    console.log('Ver mais pressionado.');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.id)} style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay} />
      <Text style={styles.imageText} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <FlatList
          data={locais}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
        <TouchableOpacity onPress={handleVerMaisPress} style={styles.maisContainer}>
          <Text style={styles.MaisText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
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
