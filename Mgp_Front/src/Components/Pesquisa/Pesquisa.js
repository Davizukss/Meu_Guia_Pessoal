import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

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
          <Text style={styles.searchText}>Pesquisar</Text>
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
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Pesquisa;
