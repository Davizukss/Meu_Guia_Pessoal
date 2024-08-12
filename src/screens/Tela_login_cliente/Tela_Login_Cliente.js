import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from '../../assets/Stack_Images/icon.png';


export default function Tela_Login_Cliente(){
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.textoLogo}>SEJA BEM VINDO (A)!</Text>

            <View style={styles.ContainerEscolha}>
                <TouchableOpacity style={styles.escolhido}><Text style={styles.textoCliente}>CLIENTE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nescolhido}><Text style={styles.textoOrganizador}>ORGANIZADOR</Text></TouchableOpacity>
            </View>

            <View style={styles.Containerinputs}>
                <View style={styles.Email}>
                    <Text>E-mail</Text>
                    <TextInput style={styles.inputs} placeholder='Email.exemplo@Gmail.com'/>
                </View>
                <View style={styles.Email}>
                    <Text>CPF</Text>
                    <TextInput style={styles.inputs} placeholder='000.000.000-00'/>
                </View>
                <View style={styles.Email}>
                    <Text>Senha</Text>
                    <TextInput style={styles.inputs} placeholder='*****************'/>
                </View>
                <View style={styles.Email}>
                    <Text>Confirmar Senha</Text>
                    <TextInput style={styles.inputs} placeholder='*****************'/>
                </View>
                <TouchableOpacity style={styles.Botao}>
                    <Text style={styles.BtnText}>Criar Conta</Text>
                </TouchableOpacity>

                <View style={styles.possuiConta}>
                    <Text style={styles.JaPossui}>Já possui uma conta?</Text>
                    <TouchableOpacity><Text style={styles.TxtPossui}> Login</Text></TouchableOpacity>
                </View>
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
    ContainerEscolha:{
        width:382,
        height: 65,
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
        width: 188,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    textoCliente:{
        fontSize:20,
        color:'#ffff',
        fontWeight:'700',
    },
    textoOrganizador:{
        fontSize:20,
        fontWeight:'700',
    },
    Email:{
        gap: 10
    },
    inputs:{
        width: 379,
        height: 60,
        paddingTop: 20,
        paddingRight:81,
        paddingBottom:20,
        paddingLeft:23,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#969696',
    },
    Botao:{
        width: 379,
        height:60,
        backgroundColor:'#16195D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BtnText:{
        fontWeight: '700',
        fontSize: 20,
        color: "#FFFFFFFF"
    },
    possuiConta:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    JaPossui:{
        color: '#969696',
        fontSize: 16,
        fontWeight: '600'
    },
    TxtPossui:{
        color: '#16195D',
        fontSize: 16,
        fontWeight: '600'
    }
    
});
