import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Foto from "../../assets/Stack_Images/MenuHamburguer/fotoperfil.png"; 
import historico from "../../assets/Stack_Images/MenuHamburguer/historico.png"; 
import configuracao from "../../assets/Stack_Images/MenuHamburguer/configuracao.png"; 
import duvida from "../../assets/Stack_Images/MenuHamburguer/ajuda.png"; 
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
            <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('Historico_Screen')}>
                <Image source={historico} />
                <Text style={styles.configText}> Histórico de Rotas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('Config_Screen')}>
                <Image source={configuracao} />
                <Text style={styles.configText}>Configurações</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.duvidaContainer}>
            <TouchableOpacity style={styles.duvida} onPress={() => navigation.navigate('Ajuda_Screen')}>
                <Image source={duvida} />
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
      duvidaContainer: {
        marginTop: 40, 
        marginLeft: 220,
        alignItems: 'flex-end', 
      },
      config: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15, 
      },
      duvida: {
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
