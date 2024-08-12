import React from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import logo from '../assets/Stack_Images/Tela_Login/logo.png';

export default function TelaLogin(){
    return(
        <View style={styles.container}> 
            <Image source = {logo} style={styles.logo}/>
            <Text style={styles.title}>SEJA BEM VINDO(A) NOVAMENTE!</Text>
            
            <Text style={styles.txt_email}>E-MAIL:</Text>
            <TextInput style={styles.email}
                placeholder = {'Email.exemplo@Gmail.com'}
            />

            <Text style={styles.txt_senha}>SENHA:</Text>
            <TextInput
                placeholder = {'*****************'}
            />

            <TouchableOpacity style={styles.btn_esqueci_senha}>
                <Text style={styles.esqueci_senha}>esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_login}>
                <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginTop: 50
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 21
    },
    txt_email:{
        fontSize: 18,
        marginRight: 220
    },
    email:{
        marginRight: 140
    },
    txt_senha:{
        fontSize: 18,
        marginRight: 220
    }

})