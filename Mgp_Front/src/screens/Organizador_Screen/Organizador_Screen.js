import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import voltar from '../../assets/Stack_Images/Tela_Login_Organizador/voltar.png';
import logo from '../../assets/Stack_Images/Tela_Login_Organizador/logo.png';
import google from '../../assets/Stack_Images/google.png';

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

        if (senha.length < 8) {
            newErrors.senha = 'A senha deve conter pelo menos 8 caracteres';
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

            <View style={styles.containerOpcao}>
                <TouchableOpacity style={styles.Cliente}>
                    <Text style={styles.txtcliente}>Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Organizador}>
                    <Text style={styles.txtorganizador}>Organizador</Text>
                </TouchableOpacity>
            </View>

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
                <View style={styles.inputsView}>
                    <Text style={styles.label}>CNPJ:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='00.000.000/0000-00' 
                        keyboardType='numeric' 
                        maxLength={18} 
                        onChangeText={setCnpj} 
                        value={cnpj}
                    />
                    {errors.cnpj && <Text style={styles.error}>{errors.cnpj}</Text>}
                </View>
                <View style={styles.inputsView}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='********' 
                        secureTextEntry={true} 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={setSenha} 
                        value={senha}
                    />
                    {errors.senha && <Text style={styles.error}>{errors.senha}</Text>}
                </View>
                <View style={styles.inputsView}>
                    <Text style={styles.label}>Confirmar Senha:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='********' 
                        secureTextEntry={true} 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={setConfirmSenha} 
                        value={confirmSenha}
                    />
                    {errors.confirmSenha && <Text style={styles.error}>{errors.confirmSenha}</Text>}
                </View>
                <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                    <Text style={styles.conta}>CRIAR CONTA</Text>
                </TouchableOpacity>
                
                <View style={styles.loginRow}>
                    <Text style={styles.jaPossui}>Já possui uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.txtPossui}> Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>
                <Text style={styles.meios_login}>Outros meios de cadastro</Text>

                <TouchableOpacity style={styles.btn_google}>
                    <Image source={google} style={styles.img_google} />
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
    Cliente: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#16195D',
    },
    Organizador: {
        height: 45,
        backgroundColor: '#16195D',
        width: '55%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtcliente: {
        fontSize: 16,
        color: '#16195D',
        fontWeight: '700',
    },
    txtorganizador: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700',
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
