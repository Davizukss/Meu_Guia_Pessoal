import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View, Text, TextInput, code} from 'react-native';
import voltar from '../assets/voltar.png';
import arara from '../assets/arara.png';

export default function Verificacao() {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.setaContainer}>
                <TouchableOpacity style={styles.seta} onPress={() => {  }}>
                    <ImageBackground source={voltar} style={styles.voltar} resizeMode="contain" />
                </TouchableOpacity>
            </View> 
            <ImageBackground source={arara} style={styles.arara} resizeMode="contain" />
            <View style={styles.textos}>
                <Text style={styles.descricao}>
                    ACABAMOS DE ENVIAR O CÓDIGO PARA SEU E-MAIL
                </Text>
                <Text style={styles.descricao2}>
                    Insira no campo abaixo o codigo de verificação fornecido pelo E-mail
                </Text>
            </View>
            <View style={styles.codigoContainer}>
                <TextInput 
                    style={styles.codigo}
                    maxLenght={1}
                    value={code}
                    keyboardType="numeric"
                    placeholder="0"
                />
                <TextInput 
                    style={styles.codigo}
                    maxLenght={1}
                    value={code}
                    keyboardType="numeric"
                    placeholder="0"
                />
                <TextInput 
                    style={styles.codigo}
                    maxLenght={1}
                    value={code}
                    keyboardType="numeric"
                    placeholder="0"
                />
                <TextInput 
                    style={styles.codigo}
                    maxLenght={1}
                    value={code}
                    keyboardType="numeric"
                    placeholder="0"
                />
                <TextInput 
                    style={styles.codigo}
                    maxLenght={1}
                    value={code}
                    keyboardType="numeric"
                    placeholder="0"
                />
            </View>
            <View style={styles.enviarContainer}>
                <TouchableOpacity style={styles.btnenviar} onPress={() => {  }}>
                    <Text style={styles.txtenviar}>ENVIAR</Text>
                </TouchableOpacity>
            </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
    },
    setaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    seta: {
        position: 'absolute',
        right: '45%',
        top: 40,
    },
    voltar: {
        width: 25,
        height: 25,
    },
    arara: {
        width: 200,
        height: 200,
        marginBottom: 15,
    },
    textos: {
        alignItems: 'center', 
        marginTop: 15,
    },
    descricao: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 21,
        textAlign: 'center',
    },
    descricao2:{
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    },
    codigoContainer:{
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center', 
        display: 'flex',
        justifyContent: 'space-around' 
    },
    codigo:{
        justifyContent: 'center',
        textAlign: 'center',
        top: 25,
        fontSize: 40,
        border: 1,
        height: 80,
        width: 52,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#969696',    
        margin: 10
    },
    btnenviar:{
        justifyContent: 'center',
        width: 350,
        gap: 8,
        paddingTop: 10,
        paddingRight: 24,
        paddingBottom: 10,
        paddingLeft: 24, 
        height: 60,
        backgroundColor: '#16195D',
        border: 1,
        borderRadius: 100
    },
    txtenviar:{
        textAlign: 'center',
        color: '#FFFF',
        fontSize: 20,
    }
});
