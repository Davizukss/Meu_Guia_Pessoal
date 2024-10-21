import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import voltar from '../../assets/Stack_Images/Cadastro_Cliente_Screen/voltar.png';
import logo from '../../assets/Stack_Images/Cadastro_Cliente_Screen/logo.png';

export default function Send_Email_Screen() {
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('')
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = () => {
        const newErrors = {};
        if (!validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Formulário enviado com sucesso:', { email });
        } else {
            setErrors(newErrors);
        }

        
        try {
            send(
            'service_4v7nywm',
            'template_ru9s7zg',
            {
                name: 'Miguel',
                email: email,
                codigo: 1234
            },
            {
                publicKey: '6F_6YgpmqQ-CbFgri6F_6YgpmqQ-CbFgri',
            },
            );
    
            console.log('SUCCESS!');
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
            console.log('EmailJS Request Failed...', err);
            }
    
            console.log('ERROR', err);
        }
          
    };

    return  (
        <ScrollView 
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}  
            showsHorizontalScrollIndicator={false} 
        >
            <View style={styles.setaContainer}>
                <TouchableOpacity style={styles.seta} onPress={() => {}}>
                    <ImageBackground source={voltar} style={styles.voltar} />
                </TouchableOpacity>
            </View>
            <ImageBackground source={logo} style={styles.logo} />
            <Text style={styles.descricaoLogo}>
                SEJA BEM VINDO (A)!
            </Text>

            <View style={styles.containerInputs}>
            
                <View style={styles.inputsView}>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='email.exemplo@gmail.com' 
                        keyboardType='email-address' 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={setEmail} 
                        value={email}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>

                <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                    <Text style={styles.conta}>Enviar Email</Text>
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
    btn_google: {
        marginTop: 10,
        alignItems: 'center',
    },
    img_google: {
        width: 70,
        height: 70,
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
    logo: {
        width: 180,
        height: 180,
        marginTop: 20,
        alignSelf: 'center',
    },
    descricaoLogo: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10,
        color: '#16195D',
    },
    containerOpcao: {
        width: '90%',
        height: 50,
        flexDirection: 'row',
        borderColor: '#16195D',
        borderRadius: 25,
        borderWidth: 2,
        marginBottom: 20,
    },
    Organizador : {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#16195D',
    },
    Cliente: {
        bottom: 1,
        right: 1,
        height: 47,
        backgroundColor: '#16195D',
        width: '55%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtcliente: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    txtorganizador: {
        fontSize: 16,
        color: '#16195D',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    containerInputs: {
        width: '90%',
        alignItems: 'center',
    },
    inputsView: {
        marginBottom: 15,
        width: '100%',
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'left',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#16195D',
    },
    input: {
        width: '100%',
        height: 50,
        padding: 15,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        fontSize: 16,
    },
    conta: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    botao: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#16195D',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    linha: {
        marginTop: 15,
        height: 2,
        backgroundColor: '#d1d1d1',
        width: '100%',
    },
    loginRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    jaPossui: {
        color: '#969696',
        fontSize: 15,
    },
    txtPossui: {
        color: '#16195D',
        fontSize: 15,
        fontWeight: '600',
    },
    meios_login: {
        marginTop: 10,
        fontSize: 14,
        color: '#969696',
    },
});



