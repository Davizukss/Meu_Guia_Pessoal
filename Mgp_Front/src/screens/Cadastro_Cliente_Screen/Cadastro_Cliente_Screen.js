import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native';
import voltar from '../../assets/Stack_Images/Cadastro_Cliente_Screen/voltar.png';
import logo from '../../assets/Stack_Images/Cadastro_Cliente_Screen/logo.png';
import google from '../../assets/Stack_Images/Cadastro_Cliente_Screen/google.png';

export default function Cadastro_Cliente_Screen() {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validateCpf = (cpf) => {

      cpf = cpf.replace(/\D/g, '');

      if (cpf.length !== 11) return false;
  
      if (/^(\d)\1+$/.test(cpf)) return false;
  
      let sum = 0;
      let remainder;
  
      for (let i = 1; i <= 9; i++) {
          sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
      }
      remainder = (sum * 10) % 11;
  
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
      sum = 0;
      for (let i = 1; i <= 10; i++) {
          sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
      }
      remainder = (sum * 10) % 11;
  
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
      return true;
  };
  
    const handleSubmit = async () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }

        if (nome.length < 8) {
            newErrors.nome = 'O Nome deve conter pelo menos 8 caracteres';
        }
        if (senha.length < 8) {
            newErrors.senha = 'A senha deve conter pelo menos 8 caracteres';
        }

        if (senha !== confirmSenha) {
            newErrors.confirmSenha = 'As senhas não são iguais';
        }

        if (!validateCpf(cpf)) {
            newErrors.cpf = ' CPF inválido';
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Formulário enviado com sucesso:', { email, senha, cpf, nome });

            try {
                const response = await fetch('http:localhost:3001/add-cli', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nome, cpf, email, senha }),
                });
            if (response.ok) {
              Alert.alert('Sucesso!', 'Cadastro realizado com sucesso');
              setNome(''); 
              setCpf(''); 
              setEmail('');
              setSenha('');
            } else {}
          } catch (error) {
            console.error('Detalhes:', error);
            Alert.alert('Erro', 'Ocorreu um erro');
          }

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
                    <Text style={styles.label}>Nome Completo:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Nome' 
                        keyboardType='default' 
                        autoCapitalize='sentences' 
                        autoCorrect={true} 
                        onChangeText={setNome} 
                        value={nome}
                    />
                    {errors.nome && <Text style={styles.error}>{errors.nome}</Text>}
                </View>
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
                    <Text style={styles.label}>CPF:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='000.000.000-00' 
                        keyboardType='numeric' 
                        maxLength={11} 
                        onChangeText={setCpf} 
                        value={cpf}
                    />
                    {errors.cpf && <Text style={styles.error}>{errors.cpf}</Text>}
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



