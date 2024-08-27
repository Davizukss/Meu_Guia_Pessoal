import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import voltar from '../../assets/Stack_Images/Tela_Login_Organizador/voltar.png';
import logo from '../../assets/Stack_Images/Tela_Login_Organizador/logo.png';

export default function MeuComponente() {
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateCnpj = (cnpj) => {
        const cnpjRegex = /^\d{14}$/;
        return cnpjRegex.test(cnpj);
    };

    const handleSubmit = () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }

        if (senha.length < 6) {
            newErrors.senha = 'A senha deve conter pelo menos 6 caracteres';
        }

        if (senha !== confirmSenha) {
            newErrors.confirmSenha = 'As senhas não são iguais';
        }

        if (!validateCnpj(cnpj)) {
            newErrors.cnpj = 'CNPJ inválido';
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Formulário enviado com sucesso:', { email, senha, cnpj });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <ImageBackground source={voltar} style={styles.voltar} />
            </TouchableOpacity>
            <ImageBackground source={logo} style={styles.logo} />
            <Text style={styles.descricao_logo}>
                SEJA BEM VINDO (a)!
            </Text>

            <View style={styles.containerOpcao}>
                <TouchableOpacity style={styles.nselecionado}>
                    <Text style={styles.cliente}>Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selecionado}>
                    <Text style={styles.organizador}>Organizador</Text>
                </TouchableOpacity>  
            </View>

            <View style={styles.containerInputs}>
                <View>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput style={styles.input} placeholder='Email.exemplo@Gmail.com' keyboardType='email-address' autoCapitalize='none' autoCorrect={false} onChangeText={setEmail} value={email}/>
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <View>
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput style={styles.input} placeholder='00.000.000/0000-00' keyboardType='numeric' maxLength={18} onChangeText={setCnpj} value={cnpj}/>
                    {errors.cnpj && <Text style={styles.error}>{errors.cnpj}</Text>}
                </View>
                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput style={styles.input} placeholder='*****************' secureTextEntry={true} autoCapitalize='none' autoCorrect={false} onChangeText={setSenha} value={senha}/>
                    {errors.senha && <Text style={styles.error}>{errors.senha}</Text>}
                </View>
                <View>
                    <Text style={styles.label}>Confirmar Senha:</Text>
                    <TextInput style={styles.input} placeholder='*****************' secureTextEntry={true} autoCapitalize='none' autoCorrect={false} onChangeText={setConfirmSenha} value={confirmSenha}/>
                    {errors.confirmSenha && <Text style={styles.error}>{errors.confirmSenha}</Text>}
                </View>
                <View>
                    <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
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
        paddingBottom: 60,
        marginHorizontal: 40,
    },
    voltar: {
        width: 25,
        height: 25,
        marginTop: 65,
        position: 'absolute',
        right: 120,
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 75
    },
    descricao_logo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 20,
    },
    containerOpcao: {
        flexDirection: 'row',
        width: 300,
        height: 40,
        marginTop: 20,
        borderColor: '#16195D',
        borderRadius: 50,
        borderWidth: 3,
        overflow: 'hidden',
    },
    nselecionado: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#16195D',
    },
    selecionado: {
        backgroundColor: '#16195D',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cliente: {
        fontSize: 15,
        color: '#16195D',
    },
    organizador: {
        fontSize: 15,
        color: '#fff',
    },
    containerInputs: {
        marginTop: 30,
        alignItems: 'center',
    },
    error: {
        color: 'red',
        marginBottom: 20
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
        paddingLeft: 15,
    },
    conta: {
        fontSize: 15,
        color: '#FFFF',
        textAlign: 'center',
    },
    botao: {
        height: 40,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#16195D',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    linha: {
        marginTop: 15,
        height: 3,
        backgroundColor: '#969696',
        width: 300,
    },
    link: {
        textAlign: 'center',
        marginTop: 15,
        color: '#16195D',
    },
});
