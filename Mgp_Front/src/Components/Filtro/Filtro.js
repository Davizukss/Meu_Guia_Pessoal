import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Filtro = ({ onClose }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View>
                <Text style={styles.text}>Todos os Filtros</Text>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.textX}>X</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Tipos de Rota:</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.FAzul}>
                    <Text style={styles.txtA}>Consumo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FBran}>
                    <Text style={styles.txtB}>Eventos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.FBran}>
                    <Text style={styles.txtB}>Esportivo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FAzul}>
                    <Text style={styles.txtA}>Aventura</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.FAzul}>
                    <Text style={styles.txtA}>Cultural</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FBran}>
                    <Text style={styles.txtB}>Histórico</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Pontos Turísticos:</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.FBran}>
                    <Text style={styles.txtB}>Gratuito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FAzul}>
                    <Text style={styles.txtA}>Pago</Text>
                </TouchableOpacity>
            </View>
        <Text style={styles.filtros}>Mais Filtros</Text>
            <View style={[styles.row, styles.actionButtons]}>
                <TouchableOpacity style={styles.FBran}>
                    <Text style={styles.txtB}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FAzul}>
                    <Text style={styles.txtA}>Aplicar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    filtros:{
        textAlign: 'center',
        marginVertical: 10,
        color: "#16195D",
        fontSize: 20,
        fontWeight: "500",   
     },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 7,
        left: 10,
        padding: 10,
        borderRadius: 20,
        zIndex: 999,
    },
    textX: {
        fontSize: 30,
        color: '#16195D',
    },
    text: {
        fontSize: 25,
        width: "100%",
        fontWeight: 'bold',
        marginHorizontal: 70,
        marginVertical: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    txtA: {
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
    },
    txtB: {
        color: '#16195D',
        fontWeight: '500',
        textAlign: 'center',
    },
    FAzul: {
        backgroundColor: '#16195D',
        width: '45%',
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
        marginHorizontal: 20,
    },
    FBran: {
        backgroundColor: '#FFF',
        width: '40%',
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#16195D',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    starRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButtons: {
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
});

export default Filtro;
