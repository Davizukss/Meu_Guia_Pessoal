import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import voltar from '../../assets/Stack_Images/Tela_Login_Organizador/voltar.png';
import logo from '../../assets/Stack_Images/Tela_Login_Organizador/logo.png';

export default function MeuComponente() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <ImageBackground source={voltar} style={styles.voltar}></ImageBackground>
            </TouchableOpacity>
            <ImageBackground source={logo} style={styles.logo}></ImageBackground>
            <Text style={styles.descricao_logo}>
                SEJA BEM VINDO (a)!
            </Text>

            <View style={styles.containerOpcao}>
                <TouchableOpacity style={styles.nselecionado}><Text style={styles.cliente}>Cliente</Text></TouchableOpacity>
                <TouchableOpacity style={styles.selecionado}><Text style={styles.organizador}>Organizador</Text></TouchableOpacity>  
            </View>

            <View style={styles.containerInputs}>
                <View>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput style={styles.input} placeholder='Email.exemplo@Gmail.com' keyboardType='email-address' autoCapitalize='none' autoCorrect={false}></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput style={styles.input} placeholder='00.000.000/0000-00' keyboardType='numeric' maxLength={18}></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder='*****************' secureTextEntry={true} autoCapitalize='none' autoCorrect={false} keyboardType="default" textContentType='password'></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Confirmar Senha:</Text>
                    <TextInput style={styles.input} placeholder='*****************' secureTextEntry={true} autoCapitalize='none' autoCorrect={false} keyboardType="default" textContentType='password'></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.conta}>CRIAR CONTA</Text>
                    </TouchableOpacity>
                    <View style={styles.linha}></View>
                    <Text style={styles.link}>Já possui uma conta? Clique aqui</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
    },
    voltar: {
        width: 25,
        height: 25,
        marginTop: 15,
        right: 135,
    },
    logo: {
        width: 200,
        height: 200,
    },
    descricao_logo:{
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 0,
    },
    containerOpcao:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 300,
        height: 40,
        marginTop: 15,
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
        marginBottom: 2,
    },
    organizador:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 8,
        color: '#fff'
    },
    containerInputs:{
        marginTop: 15,
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#969696',
        width: 300,
        height: 40,
        marginBottom: 20,
        paddingLeft: 15
    },
    conta:{
        fontSize: 15,
        color: '#FFFF',
        textAlign:'center',
        marginTop: 7
    },
    botao:{
        height: 40,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#16195D'
    },
    linha:{
        marginTop: 10,
        height: 3,
        backgroundColor: '#969696',
    },
    link:{
        textAlign:'center',
        marginTop: 5
    }
});
