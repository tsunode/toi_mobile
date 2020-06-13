import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Componentes
import InputFloat from '../../components/inputFloat'

// imagens
import Logo from '../../assets/img/toi_logo_cinza.svg';
import Google from '../../assets/img/google_logo.svg';

const Home = () => {

    function handleDimession(){
        console.log("Teste");
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar backgroundColor="#17518B" />
            <LinearGradient
                colors={["#17518B", "#000"]}
                style={style.container}
            >

                <View style={style.logoView}>
                    <Logo width={180} height={200} />
                </View>
                <View style={style.main}>
                    <InputFloat label="Loginn" onFocus={handleDimession} />
                    <InputFloat label="Senha" onFocus={handleDimession} secureText={true} />

                    <TouchableOpacity activeOpacity={0.8} style={style.buttonEnter}>
                        <Text style={style.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <Text style={style.forgotPassword}> Esqueceu a senha?</Text>
                </View>
                <View style={style.footer}>
                    <View style={style.viewButtonLeft}>

                        <TouchableOpacity activeOpacity={0.8} style={[style.buttonLeft, style.facePropriety]}>
                            <Icon name="facebook-f" size={30} color="#fff" />
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.8} style={style.buttonLeft}>
                            <Google width="40" />
                        </TouchableOpacity >
                    </View>
                    <View style={style.viewRegister}>
                        <TouchableOpacity activeOpacity={0.8} style={style.buttonRegister}>
                            <Text style={style.buttonText}>
                                Cadastre-se
                            </Text>
                        </TouchableOpacity >
                    </View>
                </View>

            </LinearGradient>
        </SafeAreaView>

    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    main: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 60
    },

    buttonEnter: {
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: "#17518B",
        textAlign: 'center',
        fontSize: 20,
    },

    forgotPassword: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10
    },

    footer: {
        flex: 1,
    },

    viewButtonLeft: {
        flex: 1.2,
        justifyContent: "space-between"
    },

    viewRegister: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },

    facePropriety: {
        backgroundColor: '#4267B2', 
        paddingLeft: 10
    },
    
    buttonLeft: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 10,
        backgroundColor: '#fff'
    },

    buttonRegister: {
        backgroundColor: '#fff',
        padding: 5,
        paddingHorizontal: 30,
        borderTopStartRadius: 10,
        borderTopRightRadius: 10
    }
})

export default Home;