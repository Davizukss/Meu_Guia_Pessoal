import React, { useState } from 'react';

import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity,} from 'react-native';
import logo from '../assets/Stack_Images/Tela_Login/logo.png';
import google from '../assets/Stack_Images/Tela_Login/google.png';

export default function TelaLogin(){

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errotSenha, setErrorSenha] = useState(null)

    const validar = () =>{
        
    }

    const login = () =>{
        if (validar()){
            console.log("Validou")
        }
    }

    return(
        <View style={styles.container}> 
            <Image source = {logo} style={styles.logo}/>
            <Text style={styles.title}>SEJA BEM VINDO(A) NOVAMENTE!</Text>
            
            <Text style={styles.txt_email}>E-MAIL:</Text>
            <TextInput style={styles.email}
                errorMessage = {errorEmail}
                placeholder = {'Email.exemplo@gmail.com'}
            />

            <Text style={styles.txt_senha}>SENHA:</Text>
            <TextInput style={styles.senha}
                placeholder = {'********'}
            />

            <TouchableOpacity style={styles.btn_esqueci_senha}>
                <Text style={styles.txt_esqueci_senha}>esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_login}>
                <Text style={styles.txt_login}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.separador}/>

            <Text style={styles.meios_login}>outros meios de login</Text>

            <TouchableOpacity style={styles.btn_google_login}>
                <Image source={google} style={styles.img_google}/>
            </TouchableOpacity>
            
            <View style={styles.rowContainer}>
                <Text style={styles.nao_possui_conta}>não possui uma conta?</Text> 
                <TouchableOpacity style={styles.btn_criar_conta}>
                    <Text style={styles.txt_criar_conta}>Crie uma</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 21
    },
    txt_email:{
        paddingTop: 15,
        paddingBottom: 10,
        fontSize: 18,
        marginRight: 220
    },
    email:{
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50
    },
    txt_senha:{
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18,
        marginRight: 220
    },
    senha: {
       
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50
    },
    btn_esqueci_senha: {
        marginRight: 150,
        paddingTop: 5,
    },
    txt_esqueci_senha: {
        fontSize: 16,
        color: '#16195D',
    },

    btn_login: {
        marginTop: 30,
        
        borderRadius: 50,
        width: 300,
        height: 50,
        backgroundColor: '#16195D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_login: {
        color: '#fff',
        fontSize: 20,
    },
    separador: {
        marginVertical: 25, 
        borderBottomWidth: 1,
        borderBottomColor: '#969696',  
        width: 300,
    },
    meios_login: {
        fontSize: 16,
        color: '#969696'
    },
    img_google: {
        marginTop: 10,
        width: 70,
        height: 70
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nao_possui_conta: {
        fontSize: 16,
        color: '#767676'
    },
    txt_criar_conta: {
        color: '#16195D',
        fontSize: 16,
        padding: 10,
    }
})