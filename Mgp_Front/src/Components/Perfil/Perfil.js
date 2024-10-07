import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Foto from "../../assets/Stack_Images/MenuHamburguer/fotoperfil.png"; 
import historico from "../../assets/Stack_Images/MenuHamburguer/historico.png"; 
import configuracao from "../../assets/Stack_Images/MenuHamburguer/configuracao.png"; 

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.perfilContainer}>
                <Image source={Foto} />
                <Text style={styles.loginText}>Sem Login iniciado</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
                <Text style={styles.buttonText}>Logar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaCadastroClie')}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>
            <View style={styles.configContainer}>
            <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('TelaHistoricoRotas')}>
                <Image source={historico} />
                <Text style={styles.configText}> Histórico de Rotas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('TelaConfiguracoes')}>
                <Image source={configuracao} />
                <Text style={styles.configText}>Configurações</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    perfilContainer: {
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom: 20,
        marginTop: 60, 
    },
    button: {
        backgroundColor: '#292B5B',
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: '90%',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginText: { 
        fontSize: 20, 
        fontWeight: '500', 
        marginTop: 10, 
    },
    configContainer: {
        marginTop: 40, 
        marginRight: 40,
        alignItems: 'flex-start', 
      },
      config: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15, 
      },
      configText: {
        marginLeft: 10,
        fontSize: 22,
        color: '#292B5B',
      },
});
