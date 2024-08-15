import React from 'react';
import voltar from '../../assets/Stack_Images/Tela_Login_Organizador/voltar.png';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import logo from '../../assets/Stack_Images/Tela_Login_Organizador/logo.png';

export default function MeuComponente() {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {}}>
                    <ImageBackground source={voltar} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>
                <ImageBackground source={logo} style={styles.logo}></ImageBackground>
                <Text style={styles.descricao_logo}>
                    SEJA BEM VINDO (a)!
                </Text>
            </View>

            <View style={styles.containerOpcao}>
                <TouchableOpacity style={styles.nselecionado}><Text style={styles.cliente}>Cliente</Text></TouchableOpacity>
                <TouchableOpacity style={styles.selecionado}><Text style={styles.organizador}>Organizador</Text></TouchableOpacity>  
            </View>

            <View style={styles.containerInputs}>
                <View style={styles.email}>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput style={styles.input} placeholder='Email.exemplo@Gmail.com' keyboardType='email-address' autoCapitalize='none' autoCorrect={false}></TextInput>
                </View>
                <View style={styles.cnpj}>
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput style={styles.input} placeholder='00.000.000/0000-00' keyboardType='numeric' maxLength={18}></TextInput>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    voltar: {
        width: 25,
        height: 25,
        bottom: 180,
        right: 150,
    },
    logo: {
        width: 200,
        height: 200,
        bottom: 180,
    },
    descricao_logo:{
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000000',
        bottom: 190,
    },
    containerOpcao:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
        height: 40,
        bottom: 170,
        borderColor: '#16195D',
        borderRadius: 50,
        borderWidth: 3
    },
    nselecionado:{
        width: 155,
    },
    selecionado:{
        backgroundColor: '#16195D',
        width: 146,
        height: 40,
        borderRadius: 50,
    },
    cliente:{
        fontSize: 15,
        textAlign: 'center',
        bottom: 2
    },
    organizador:{
        fontSize: 15,
        textAlign: 'center',
        top: 8,
        color: '#fff'
    },
    containerInputs:{
        bottom: 150,
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 5,
        marginLeft: 10
    },
    input: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#969696',
        width: 300,
        height: 40
    },
});