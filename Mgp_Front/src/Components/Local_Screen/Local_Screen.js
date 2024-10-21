import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LocalContext } from '../../Context/LocalContext';
import masp from '../../assets/Stack_Images/Lista_Locais/SaoPaulo.jpg';
import ibira from '../../assets/Stack_Images/Lista_Locais/ibira.jpg';
import catedralSe from '../../assets/Stack_Images/Lista_Locais/catedralSe.jpg';
import mercadao from '../../assets/Stack_Images/Lista_Locais/mercadao.jpg';
import museudoipiranga from '../../assets/Stack_Images/Lista_Locais/museudoipiranga.jpg';
import teatroMuni from '../../assets/Stack_Images/Lista_Locais/TeatroMunicipal.png';

const locais = [
  { name: 'Avenida Paulista', latitude: -23.5617, longitude: -46.6552 },
  { name: 'Parque Ibirapuera', latitude: -23.5875, longitude: -46.6564 },
  { name: 'Museu do Ipiranga', latitude: -23.5908, longitude: -46.6340 },
  { name: 'Mercadão de São Paulo', latitude: -23.5467, longitude: -46.6340 },
  { name: 'Teatro Municipal', latitude: -23.5505, longitude: -46.6333 },
  { name: 'Catedral da Sé', latitude: -23.5505, longitude: -46.6342 },
  { name: 'Pátio do Colégio', latitude: -23.5502, longitude: -46.6345 },
];

export default function Local_Screen({ navigation }) {
  const { setLocalData } = useContext(LocalContext);

  const iniciarCircuito = () => {
    setLocalData(locais);
    navigation.navigate('Map_Screen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} style={styles.seta} />
      </TouchableOpacity>

      <View style={styles.swiperContainer}>
        <Swiper
          showsButtons={false}
          showsPagination={true}
          paginationStyle={styles.pagination}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          <View style={styles.slide}>
            <Image source={masp} style={styles.localImage} />
          </View>
          <View style={styles.slide}>
            <Image source={ibira} style={styles.localImage} />
          </View>
          <View style={styles.slide}>
            <Image source={catedralSe} style={styles.localImage} />
          </View>
          <View style={styles.slide}>
            <Image source={mercadao} style={styles.localImage} />
          </View>
          <View style={styles.slide}>
            <Image source={museudoipiranga} style={styles.localImage} />
          </View>
          <View style={styles.slide}>
            <Image source={teatroMuni} style={styles.localImage} />
          </View>
        </Swiper>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoContainerW}>
          <Text style={styles.infoTextB}>Histórico</Text>
        </View>
        <View style={styles.infoContainerB}>
          <Text style={styles.infoTextW}>Pago</Text>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <AntDesign key={index} name="star" size={24} color="#16195D" style={styles.star} />
        ))}
        <Text style={styles.rateText}>  5.0 </Text>
        <TouchableOpacity>
          <Text style={styles.ratingText}>(ver Avaliações)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Tour - São Paulo</Text>
      <Text style={styles.description}>
        Participe de um tour histórico por São Paulo, visitando o Pátio do Colégio e a Catedral da Sé. Explore a rica herança cultural da cidade e saboreie 
        um famoso sanduíche de mortadela no Mercado Municipal. Uma experiência imperdível!
      </Text>

      <TouchableOpacity style={styles.startButton} onPress={iniciarCircuito}>
        <Text style={styles.buttonText}>INICIE AQUI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seta: {
    margin: 20,
    color: '#16195D',
  },
  swiperContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  localImage: {
    borderRadius: 10,
    width: 350,
    height: 250,
    resizeMode: 'cover',
  },
  pagination: {
    bottom: 20,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#FFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
  },
  infoRow: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  infoContainerB: {
    borderRadius: 20,
    width: '30%',
    backgroundColor: '#16195D',
    paddingVertical: 10,
    marginLeft: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
  infoContainerW: {
    width: '35%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTextW: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
    textAlign: 'center',
  },
  infoTextB: {
    fontSize: 18,
    fontWeight: '500',
    color: '#16195D',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 30,
    alignItems: 'center',
  },
  star: {
    marginRight: 5,
  },
  rateText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  ratingText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    color: '#000',
    fontWeight: '450',
  },
  startButton: {
    backgroundColor: '#16195D',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
