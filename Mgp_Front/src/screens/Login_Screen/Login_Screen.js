import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView , ImageBackground} from 'react-native';
import logo from '../../assets/Stack_Images/Login_Screen/logo.png';
import google from '../../assets/Stack_Images/Login_Screen/google.png';
import voltar from '../../assets/Stack_Images/Login_Screen/voltar.png';

export default function Login_Screen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }
        if (senha.length < 1) {
            newErrors.senha = 'Senha inválida';
        }

        setErrors(newErrors);

    //Endy fazer validacao da senha  e email com base no banco
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http:localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, senha }),
                });

                const data = await response.json();

                if (data.success) {
                    console.log('Login bem-sucedido');
                } else {
                    setErrors({ ...newErrors, senha: 'Senha incorreta ou email não encontrado' });
                }
            } catch (error) {
                console.error('Erro ao tentar logar', error);
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
              <View style={styles.setaContainer}>
                <TouchableOpacity style={styles.seta} onPress={() => {}}>
                    <ImageBackground source={voltar} style={styles.voltar} />
                </TouchableOpacity>
            </View>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>SEJA BEM VINDO(A)</Text>
            
            <Text style={styles.txt_email}>E-mail:</Text>
            <TextInput 
                style={styles.email}
                placeholder="email.exemplo@gmail.com"
                onChangeText={value => setEmail(value)}
                value={email}
            />
            {errors.email && <Text style={styles.errorTextEmail}>{errors.email}</Text>}

            <Text style={styles.txt_senha}>Senha:</Text>
            <TextInput 
                style={styles.senha}
                placeholder="********"
                secureTextEntry
                onChangeText={value => setSenha(value)}
                value={senha}
            />
            {errors.senha && <Text style={styles.errorTextSenha}>{errors.senha}</Text>}

            <TouchableOpacity style={styles.btn_esqueci_senha}>
                <Text style={styles.txt_esqueci_senha}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_login} onPress={handleSubmit}>
                <Text style={styles.txt_login}>Login</Text>
            </TouchableOpacity>

            <View style={styles.separador} />

            <Text style={styles.meios_login}>outros métodos de login</Text>

            <TouchableOpacity style={styles.btn_google_login}>
                <Image source={google} style={styles.img_google} />
            </TouchableOpacity>
            
            <View style={styles.rowContainer}>
                <Text style={styles.nao_possui_conta}>não possui uma conta?</Text> 
                <TouchableOpacity style={styles.btn_criar_conta}>
                    <Text style={styles.txt_criar_conta}>Crie uma</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        width: 200,
        height: 200,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#FFF',
    },
    title: {
        color:"#16195D",
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20,
    },
    txt_email: {
        color:"#16195D",
        paddingTop: 15,
        paddingBottom: 10,
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    email: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
    },
    txt_senha: {
        color:"#16195D",
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    senha: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
    },
    btn_esqueci_senha: {
        alignSelf: 'flex-start',
        paddingTop: 5,
    },
    txt_esqueci_senha: {
        fontSize: 16,
        color: '#16195D',
        fontWeight: 'bold',
    },
    btn_login: {
        marginTop: 30,
        borderRadius: 50,
        width: 300,
        height: 50,
        backgroundColor: '#16195D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_login: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    separador: {
        marginVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#969696',
        width: 300,
    },
    meios_login: {
        fontSize: 16,
        color: '#969696',
    },
    btn_google_login: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_google: {
        width: 70,
        height: 70,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nao_possui_conta: {
        fontSize: 16,
        color: '#767676',
    },
    btn_criar_conta: {
        marginLeft: 5,
    },
    txt_criar_conta: {
        color: '#16195D',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine : 'underline',
    },
    errorTextEmail: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    errorTextSenha: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
});
