import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import lupa from "../../assets/Stack_Images/Map_Screen/search.png";
import filtro from "../../assets/Stack_Images/Map_Screen/filtro.png";
import linha from "../../assets/Stack_Images/Map_Screen/linha.png";
import Lista_Locais from '../Lista_Locais/Lista_Locais';
import { locais } from '../../mocks/locaisMocks'; 
import Filtro from '../Filtro/Filtro'; 

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const Pesquisa = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocais, setFilteredLocais] = useState(locais);
  const [isFiltroVisible, setIsFiltroVisible] = useState(false);
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    const filtered = locais.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLocais(filtered);
  }, [searchQuery]);

  const handleKeyboardShow = () => {
    translateY.value = withSpring(expanded ? 0 : SCREEN_HEIGHT * 0.4);
  };

  const handleKeyboardHide = () => {
    translateY.value = withSpring(expanded ? 0 : SCREEN_HEIGHT * 0.56);
  };

  const handleGestureEnd = (event) => {
    const { translationY } = event.nativeEvent;
    const threshold = 100;

    if (translationY < -threshold) {
      toggleExpand(true);
    } else if (translationY > threshold) {
      toggleExpand(false);
    } else {
      translateY.value = withSpring(expanded ? 1 : SCREEN_HEIGHT);
    }
  };

  const toggleExpand = (shouldExpand) => {
    setExpanded(shouldExpand);
    translateY.value = withSpring(shouldExpand ? 0 : SCREEN_HEIGHT);
  };

  const toggleFiltro = () => {
    setIsFiltroVisible(!isFiltroVisible); 
  };

  const closeFiltro = () => {
    setIsFiltroVisible(false);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    height: expanded ? SCREEN_HEIGHT * 0.94 : '435%',
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler onEnded={handleGestureEnd}>
        <Animated.View style={[styles.searchContainer, animatedStyle]}>
          <View style={styles.barra}>
            <Image source={linha} />
          </View>
          <View style={styles.searchBar}>
            <Image source={lupa} style={styles.icon} />
            <TextInput
              style={styles.pesquisa}
              placeholder="Buscar rotas turísticas..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)} 
              onFocus={() => {
                if (!expanded) {
                  toggleExpand(true);
                }
              }}
            />
            <TouchableOpacity onPress={toggleFiltro}>
              <Image source={filtro} style={styles.icon} />
            </TouchableOpacity>
          </View>

          {isFiltroVisible && (
            <TouchableWithoutFeedback onPress={closeFiltro}>
              <View style={styles.filtroContainer}>
                <Filtro onClose={closeFiltro} /> 
              </View>
            </TouchableWithoutFeedback>
          )}

          <Text style={styles.rotasText}>Rotas Sugeridas:</Text>
          <Lista_Locais locais={filteredLocais} /> 
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rotasText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 20,
    marginVertical: 10,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    zIndex: 2,
  },
  barra: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '90%',
    backgroundColor: '#F1F1F1',
    borderRadius: 40,
    marginHorizontal: '5%',
    paddingVertical: 10,
  },
  pesquisa: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  filtroContainer: {
    position: 'absolute', 
    top: 0, 
    right: 0,  
    height: SCREEN_HEIGHT,  
    width: SCREEN_WIDTH * 0.8,  
    backgroundColor: '#fff',
    borderRadius: 30,
    zIndex: 999,  
    padding: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default Pesquisa;
