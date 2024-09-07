import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import logo from '../../assets/Stack_Images/Tela_Inicio_Images/Logo_tela_inicio.png';
import bck_init from '../../assets/Stack_Images/Tela_Inicio_Images/Bck_init.png';
import { useNavigation } from '@react-navigation/native'; 
export default function Introduction_Screen() {
    const navigation = useNavigation();
    return (
        <Swiper style={styles.wrapper} showsButtons={false}  
        showsPagination={true}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
            <ImageBackground source={bck_init} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>MEU GUIA PESSOAL</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.description}>
                    Aproveite ao máximo sua viagem com o nosso guia! Permita a si mesmo ter um lazer sem a necessidade de um tempo limite.
                    </Text>
                </View>
            </ImageBackground>
            <ImageBackground source={bck_init} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>ESCOLHA SUA ROTA</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.description}>
                    Com a customização de rotas, você não perde nenhum dos destinos, atrações ou até paradas rápidas em sua viagem!
                    </Text>
                </View>
            </ImageBackground>
            <ImageBackground source={bck_init} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>INICIE SUA JORNADA</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.description}>
                        Comece agora e obtenha o melhor do lazer.
                    </Text>
                </View>
                <TouchableOpacity style={styles.bck_button} onPress={() => navigation.navigate('Home_Screen')}>
                    <Text style={styles.button}>INICIE AQUI</Text>
                </TouchableOpacity>
            </ImageBackground>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
    },
    pagination: {
        bottom: 50,
    },
    dot: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 10,
        height: 10,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDot: {
        backgroundColor: '#FFF',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
    },
    bck_button: {
        paddingVertical: 15,
        paddingHorizontal: 70, 
        backgroundColor: "#fff",
        borderRadius: 40,
        position: "absolute",
        bottom: "18%",

    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF',
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
    },
});
