import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Text, Keyboard } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import lupa from "../../assets/Stack_Images/Map_Screen/search.png";
import filtro from "../../assets/Stack_Images/Map_Screen/filtro.png";
import linha from "../../assets/Stack_Images/Map_Screen/linha.png";
import Lista_Locais from '../Lista_Locais/Lista_Locais';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Pesquisa = () => {
  const [expanded, setExpanded] = useState(false);
  const translateY = useSharedValue(SCREEN_HEIGHT);

  // Adiciona listeners para o teclado
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

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
      toggleExpand(true); // Expande para cima
    } else if (translationY > threshold) {
      toggleExpand(false); // Colapsa para baixo
    } else {
      translateY.value = withSpring(expanded ? 0 : SCREEN_HEIGHT);
    }
  };

  const toggleExpand = (shouldExpand) => {
    setExpanded(shouldExpand);
    translateY.value = withSpring(shouldExpand ? 0 : SCREEN_HEIGHT); // Controla a animação de expansão
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    height: expanded ? (SCREEN_HEIGHT * 0.94) : "435%",
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
              placeholder='Buscar rotas turísticas...' 
              onFocus={() => { 
                if (!expanded) {
                  toggleExpand(true); // Expande automaticamente ao focar
                }
              }} 
            />
            <TouchableOpacity>
              <Image source={filtro} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.rotasText}>Rotas Sugeridas:</Text>
          <Lista_Locais />
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
    width: "90%",
    backgroundColor: "#F1F1F1",
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
});

export default Pesquisa;
