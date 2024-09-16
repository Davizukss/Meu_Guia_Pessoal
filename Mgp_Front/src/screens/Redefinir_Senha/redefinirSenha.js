import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import voltar from '../../assets/Stack_Images/Organizador_Screen/voltar.png';
import logo from '../../assets/Stack_Images/Organizador_Screen/logo.png'


export default function RedefinirSenha() {
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [errors, setErrors] = useState({});



    const handleSubmit = () => {
        const newErrors = {};

        if (senha.length < 8) {
            newErrors.senha = 'A senha deve conter pelo menos 8 caracteres';
        }

        if (senha !== confirmSenha) {
            newErrors.confirmSenha = 'As senhas não são iguais';
        }


        if (Object.keys(newErrors).length === 0) {
            console.log('Formulário enviado com sucesso:', { senha });
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
                REDEFINIÇÃO DE SENHA
            </Text>
            <Text style={styles.text}>
                redefina sua senha nos campos abaixo:
            </Text>

            <View style={styles.containerInputs}>
                <View style={styles.novaSenha}>
                    <Text style={styles.novaSenhaText}>Nova Senha:</Text>
                    <TextInput 
                        style={styles.inputNovaSenha} 
                        placeholder='********' 
                        secureTextEntry={true} 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={setSenha} 
                        value={senha}
                    />
                    {errors.senha && <Text style={styles.error}>{errors.senha}</Text>}
                </View>
                <View style={styles.confirmarSenha}>
                    <Text style={styles.confirmarSenhaText}>Confirmar nova senha:</Text>
                    <TextInput 
                        style={styles.inputConfirmarSenha} 
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
                    <Text style={styles.conta}>CONFIRMAR</Text>
                </TouchableOpacity>  
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 30,
    },
    setaContainer: {
        position: 'absolute',
        top: 48,
        left: 30,
    },
    seta: {
        width: 24,
        height: 24,
    },
    voltar: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 20,
        alignSelf: 'center',

    },
    descricaoLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 50, 
    },
    containerInputs: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 10
    },
    novaSenhaText: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    inputNovaSenha: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
        marginBottom: 16,
    },
    inputConfirmarSenha: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
    },
    error: {
        color: 'red',
        marginTop: 4,
    },
    text: {
        fontSize: 18,
        marginBottom: 50
    }
});
