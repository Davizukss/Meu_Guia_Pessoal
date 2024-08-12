import React from 'react';
import voltar from '../../assets/Stack_Images/Tela_Login_Organizador/voltar.png';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../assets/Stack_Images/Tela_Login_Organizador/logo.png';

export default function MeuComponente() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ImageBackground source={voltar} style={styles.voltar}></ImageBackground>
            </TouchableOpacity>
            <ImageBackground source={logo} style={styles.logo}></ImageBackground>
            <Text style={styles.descrição_logo}>
                SEJA BEM VINDO (a)!
            </Text>
            <TouchableOpacity style={styles.selecionado}>
                <Text style={styles.cliente}>Cliente</Text>
                <Text style={styles.organizador}>Organizador</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voltar: {
        width: 25,
        height: 25,
        bottom: 200,
        right: 150,
    },
    logo: {
        width: 200,
        height: 200,
        bottom: 210
    },
    descrição_logo:{
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000000',
        bottom: 200
    },
    selecionado:{
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#16195D'
    },
    cliente:{
        fontSize: 20
    },
    organizador:{
        fontSize: 20,
        left: 54,
        
    },
});
