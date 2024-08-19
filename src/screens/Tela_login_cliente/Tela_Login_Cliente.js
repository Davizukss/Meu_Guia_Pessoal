import React, {useState} from "react";
import {Image,StyleSheet,Text,TextInput,TouchableOpacity,View,ScrollView,} from "react-native";
import logo from "../../assets/Stack_Images/icon.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Tela_Login_Cliente() {
    const[email, setEmail] = useState('')
    const[cpf, setCpf] = useState('')
    const[senha, setsenha] = useState('')
    const[confirmarSenha, setConfirmarSenha] = useState('')
    const[erroremail, setErrorEmail] = useState('')
    const[errorcpf, setErrorCpf] = useState('')
    const[errorsenha, setErrorsenha] = useState('')
    const[errorconfirmarSenha, setErrorConfirmarSenha] = useState('')

    const validar = () => {
        setErrorEmail("Digite um email válido")
        return false
    }

  
    return (
    
    <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.SetaContainer}>
                <TouchableOpacity style={styles.seta}>
                    <AntDesign name="arrowleft" size={33} color={"#16195D"}/>
                </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
            </View>
            <Text style={styles.textoLogo}>SEJA BEM VINDO (A)!</Text>

            <View style={styles.ContainerEscolha}>
                <TouchableOpacity style={styles.Cliente}>
                    <Text style={styles.textoCliente}>CLIENTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Organizador}>
                    <Text style={styles.textoOrganizador}>ORGANIZADOR</Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.Containerinputs}>
            <View style={styles.InputsView}>
                <Text style={styles.TextInput}>E-mail</Text>
                <TextInput style={styles.inputs} placeholder="Email.exemplo@gmail.com" onChangeText={value => setEmail(value)} errorMessage={erroremail}/>
            </View>
            <View style={styles.InputsView}>
                <Text style={styles.TextInput}>CPF</Text>
                <TextInput style={styles.inputs} placeholder="000.000.000-00" onChangeText={value => setCpf(value)}/>
            </View>
            <View style={styles.InputsView}>
                <Text style={styles.TextInput}>Senha</Text>
                <TextInput style={styles.inputs} placeholder="*****************" onChangeText={value => setSenha(value)}/>
            </View>
            <View style={styles.InputsView}>
                <Text style={styles.TextInput}>Confirmar Senha</Text>
                <TextInput style={styles.inputs} placeholder="*****************" onChangeText={value => setConfirmarSenha(value)}/>
            </View>
                <TouchableOpacity style={styles.Botao}>
                    <Text style={styles.BtnText}>Criar Conta</Text>
                </TouchableOpacity>
                <View style={styles.linha}></View>
                <View style={styles.possuiConta}>
                    <Text style={styles.JaPossui}>Já possui uma conta?</Text>
                    <TouchableOpacity><Text style={styles.TxtPossui}> Login</Text></TouchableOpacity>
                </View>
        </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexGrow:1
  },
  ContainerEscolha: {
    width: "90%",
    height:55,
    flexDirection: "row",
    borderColor: "#16195D",
    borderRadius: 50,
    borderWidth: 3,
    marginTop:10
  },
  Containerinputs: {
    width: "90%",
    height: "45%",
  },
  SetaContainer: {
    flexDirection: "row",
  },
  seta: {
    position: "absolute",
    right:'62%',
    top: '20%'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 40,
    alignSelf: "center",
  },
  textoLogo: {
    fontWeight: "900",
    fontSize: 21,
  },
  Cliente: {
    backgroundColor: "#16195D",
    width: "55%",
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  Organizador: {
    width: "45%",
    height: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textoCliente: {
    fontSize: 15,
    color: "#ffff",
    fontWeight: "700",
  },
  textoOrganizador: {
    fontSize: 15,
    fontWeight: "700",
  },
  inputs: {
    width: "100%",
    height: 60,
    paddingTop: 15,
    paddingRight: 81,
    paddingBottom: 15,
    paddingLeft: 23,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#969696",
  },
  InputsView:{
    marginTop:10,
    marginBottom:5
  },
  TextInput: {
    left: "6%",
    fontWeight:'600'
  },
  Botao: {
    height: 60,
    backgroundColor: "#16195D",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop:15
  },
  BtnText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#FFFFFFFF",
  },
  possuiConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  JaPossui: {
    color: "#969696",
    fontSize: 16,
    fontWeight: "600",
  },
  TxtPossui: {
    color: "#16195D",
    fontSize: 16,
    fontWeight: "600",
  },
  linha:{
    backgroundColor:'black'
  },
});
