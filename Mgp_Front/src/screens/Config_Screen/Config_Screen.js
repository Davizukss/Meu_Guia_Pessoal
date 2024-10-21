import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import voltar from '../../assets/Stack_Images/Cadastro_Cliente_Screen/voltar.png'; 

export default function Config_Screen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.setaContainer} onPress={() => navigation.goBack()}>
                <Image source={voltar} style={styles.voltar} />
            </TouchableOpacity>
            <Text style={styles.titulo}>Tela em produção</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setaContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    voltar: {
        width: 25,
        height: 25,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
    },
});
