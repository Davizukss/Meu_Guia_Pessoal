import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Filtro = ({ onClose }) => {
    const [selected, setSelected] = useState({});

    const toggleSelection = (key) => {
        setSelected((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View>
                <Text style={styles.text}>Todos os Filtros</Text>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <AntDesign name="close" size={30} style={styles.textX} />
                </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Tipos de Rota:</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, selected['Consumo'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Consumo')}
                >
                    <Text style={selected['Consumo'] ? styles.txtA : styles.txtB}>Consumo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected['Eventos'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Eventos')}
                >
                    <Text style={selected['Eventos'] ? styles.txtA : styles.txtB}>Eventos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, selected['Esportivo'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Esportivo')}
                >
                    <Text style={selected['Esportivo'] ? styles.txtA : styles.txtB}>Esportivo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected['Aventura'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Aventura')}
                >
                    <Text style={selected['Aventura'] ? styles.txtA : styles.txtB}>Aventura</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, selected['Cultural'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Cultural')}
                >
                    <Text style={selected['Cultural'] ? styles.txtA : styles.txtB}>Cultural</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected['Histórico'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Histórico')}
                >
                    <Text style={selected['Histórico'] ? styles.txtA : styles.txtB}>Histórico</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>Pontos Turísticos:</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.button, selected['Gratuito'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Gratuito')}
                >
                    <Text style={selected['Gratuito'] ? styles.txtA : styles.txtB}>Gratuito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected['Pago'] ? styles.FAzul : styles.FBran]}
                    onPress={() => toggleSelection('Pago')}
                >
                    <Text style={selected['Pago'] ? styles.txtA : styles.txtB}>Pago</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.filtros}> Mais Filtros</Text>
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
    filtros: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#16195D',
        fontSize: 20,
        fontWeight: '500',
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
        width: '100%',
        fontWeight: 'bold',
        marginHorizontal: 70,
        marginVertical: 15,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    txtA: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
    },
    txtB: {
        fontSize: 10,
        color: '#4A4DA1',
        fontWeight: '500',
        textAlign: 'center',
    },
    FAzul: {
        backgroundColor: '#3C3F89',
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
    },
    FBran: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
    },
    button: {
        width: '50%',
        margin: 3,
        paddingVertical: 15,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    actionButtons: {
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
});

export default Filtro;
