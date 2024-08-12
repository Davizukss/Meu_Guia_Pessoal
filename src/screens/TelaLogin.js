import React from 'react';
import { View, Image, StyleSheet, Text, TextField, TextInput} from 'react-native';
import logo from '../assets/Stack_Images/Tela_Login/logo.png';

export default function TelaLogin(){
    return(
        <View style={styles.conatiner}> 
            <Image source = {logo} style={styles.logo}/>
            <Text style={styles.title}>SEJA BEM VINDO(A) NOVAMENTE!</Text>
            <TextInput
                label={'Email'}
                placeholder = {'Email.exemplo@Gmail.com'}
            />
            <TextInput
                label={'Senha'}
                placeholder = {'*****************'}
            />
            </View>
    )
}

const styles = StyleSheet.create({

})