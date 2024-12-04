import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LocalContext } from '../../Context/LocalContext';
import { locais } from '../../mocks/locaisMocks';

export default function Local_Screen({ navigation, route }) {
  const { setLocalData } = useContext(LocalContext);

  const { id } = route.params;


  const localData = locais.find(local => local.id === id);

  const iniciarCircuito = (locais) => {
    setLocalData(locais);
    navigation.navigate('Map_Screen');
  };

  if (!localData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Local não encontrado!</Text>
      </View>
    );
  }


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <AntDesign
          key={i}
          name="star"
          size={24}
          color={i < Math.floor(rating) ? "#16195D" : "#ccc"}
          style={styles.star}
        />
      );
    }
    return stars;
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
          {localData.imagens.map((imagem, index) => (
            <View style={styles.slide} key={index}>
              <Image source={imagem} style={styles.localImage} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoContainerW}>
          <Text style={styles.infoTextB}>{localData.categoria}</Text>
        </View>
        <View style={styles.infoContainerB}>
          <Text style={styles.infoTextW}>{localData.preco}</Text>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        {renderStars(localData.avaliacao)}
        <Text style={styles.rateText}>{localData.avaliacao.toFixed(1)} </Text>
        <TouchableOpacity>
          <Text style={styles.ratingText}>(ver Avaliações)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{localData.title}</Text>
      <Text style={styles.description}>{localData.descricao}</Text>

      <TouchableOpacity style={styles.startButton} onPress={() => iniciarCircuito(localData.locais)}>
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
    objectFit: 'cover',
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
    width: '50%',
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
