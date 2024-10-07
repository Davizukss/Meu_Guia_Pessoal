import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import lupa from "../../assets/Stack_Images/Map_Screen/search.png";
import filtro from "../../assets/Stack_Images/Map_Screen/filtro.png";
import linha from "../../assets/Stack_Images/Map_Screen/linha.png";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Pesquisa = () => {
  const [expanded, setExpanded] = useState(false);
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const handleGestureEnd = (event) => {
    const { translationY } = event.nativeEvent;
    const threshold = 100;

    if (translationY < -threshold) {
      setExpanded(true);
      translateY.value = withSpring(0);
    } else if (translationY > threshold) {
      setExpanded(false);
      translateY.value = withSpring(SCREEN_HEIGHT);
    } else {
      translateY.value = withSpring(expanded ? 0 : SCREEN_HEIGHT);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      height: expanded ? (SCREEN_HEIGHT * 0.94) : "435%",
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onEnded={handleGestureEnd}>
        <Animated.View style={[styles.searchContainer, animatedStyle]}>
          <View style={styles.barra}>
            <Image source={linha} />
          </View>
          <View style={styles.searchBar}>
            <Image source={lupa} style={styles.icon} />
            <TextInput style={styles.pesquisa} placeholder='Buscar rotas turísticas...' />
            <Image source={filtro} style={styles.icon} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "85%",
    backgroundColor: "#F1F1F1",
    borderRadius: 40,
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
