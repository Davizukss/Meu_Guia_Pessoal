import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from '../../assets/Stack_Images/Tela_Inicio_Images/Logo_tela_inicio.png';


export default function Tela_Login_Cliente(){
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.textoLogo}>SEJA BEM VINDO (A)!</Text>

            <View style={styles.escolha}>
                <TouchableOpacity style={styles.escolhido}><Text style={styles.textoCliente}>CLIENTE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nescolhido}><Text style={styles.textoOrganizador}>ORGANIZADOR</Text></TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    
    container:{
        alignItems:'center',
        height:'100%'
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 40 
    },
    textoLogo:{
        fontWeight:'900',
        fontSize:21,

    },
    escolha:{
        width:382,
        height: 66,
        flexDirection:'row',
        borderColor:'#16195D',
        borderRadius: 50,
        borderWidth: 3,
        
        
    },
    escolhido:{
        backgroundColor: '#16195D',
        width: 188,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
    
    },
    nescolhido:{
        width: 190.5,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCliente:{
        fontSize:20,
        color:'#ffff',
        fontWeight:'700',
    },
    textoOrganizador:{
        fontSize:20,
        fontWeight:'700',
    }
});
