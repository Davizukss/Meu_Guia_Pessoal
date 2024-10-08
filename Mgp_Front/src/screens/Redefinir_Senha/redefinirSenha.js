import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import voltar from '../../assets/Stack_Images/Organizador_Screen/voltar.png';
import logo from '../../assets/Stack_Images/Organizador_Screen/logo.png';

export default function RedefinirSenha() {
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [errors, setErrors] = useState({});

    const validateSenha = (senha) => {
        const newErrors = {};

        if (!/(?=.*\d)/.test(senha)) {
            newErrors.digit = 'A senha deve conter pelo menos um dígito.';
        }
        if (senha.length < 8) {
            newErrors.length = 'A senha deve conter pelo menos 8 caracteres.';
        }
        if (!/(?=.*[a-z])/.test(senha)) {
            newErrors.lowercase = 'A senha deve conter pelo menos uma letra minúscula.';
        }
        if (!/(?=.*[A-Z])/.test(senha)) {
            newErrors.uppercase = 'A senha deve conter pelo menos uma letra maiúscula.';
        }
        if (!/(?=.*[@$!%*?&])/.test(senha)) {
            newErrors.specialChar = 'A senha deve conter pelo menos um caractere especial.';
        }

        return newErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validateSenha(senha);
        const confirmSenhaError = senha !== confirmSenha ? 'As senhas não são iguais.' : null;

        if (Object.keys(validationErrors).length === 0 && !confirmSenhaError) {
            console.log('Formulário enviado com sucesso:', { senha });
            setErrors({}); // Limpa erros se tudo estiver correto
        } else {
            setErrors({ ...validationErrors, confirmSenha: confirmSenhaError });
        }       
    };

    return (
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
            <Text style={styles.descricaoLogo}>REDEFINIÇÃO DE SENHA</Text>
            <Text style={styles.text}>Redefina sua senha nos campos abaixo:</Text>

            <View style={styles.containerInputs}>
                <View style={styles.novaSenha}>
                    <Text style={styles.novaSenhaText}>Nova senha:</Text>
                    <TextInput 
                        style={styles.inputNovaSenha} 
                        placeholder='********' 
                        secureTextEntry={true} 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={setSenha} 
                        value={senha}
                    />
                    {errors.digit && <Text style={styles.error}>{errors.digit}</Text>}
                    {errors.length && <Text style={styles.error}>{errors.length}</Text>}
                    {errors.lowercase && <Text style={styles.error}>{errors.lowercase}</Text>}
                    {errors.uppercase && <Text style={styles.error}>{errors.uppercase}</Text>}
                    {errors.specialChar && <Text style={styles.error}>{errors.specialChar}</Text>}
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
                    <Text style={styles.btnText}>CONFIRMAR</Text>
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
        marginTop: 30,
        alignSelf: 'center',
    },
    descricaoLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10, 
    },
    containerInputs: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 20
    },
    novaSenhaText: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
        paddingLeft: 11
    },
    inputNovaSenha: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
        marginBottom: 20
    },
    inputConfirmarSenha: {
        paddingLeft: 23,
        borderWidth: 3,
        borderColor: '#969696',
        borderRadius: 50,
        width: 300,
        height: 50,
    },
    confirmarSenhaText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        paddingLeft: 11
    },
    botao:{
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#16195D',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,   
    },
    btnText:{
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        marginTop: 5    
    },
    text: {
        fontSize: 18,
        marginBottom: 30
    }
});
