import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StatusBar, SafeAreaView, Animated, Keyboard } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

// Componentes
import InputFloat from '../../components/inputFloat'

//style
import style from './styles';

// imagens
import Logo from '../../assets/img/toi_logo_cinza.svg';
import Google from '../../assets/img/google_logo.svg';

const Login = () => {

    const [logoScale, setLogoScale] = useState(new Animated.Value(1));
    const [keyboardStatus, setKeyboardStatus] = useState('hide');
    const navigation = useNavigation();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const keyboardDidHIdeListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    })


    function keyboardDidShow() {

        setKeyboardStatus('show');

        Animated.timing(
            logoScale,
            {
                toValue: 0.7,
                duration: 350,
                useNativeDriver: true,
            }
        ).start();
    }

    function keyboardDidHide() {

        setKeyboardStatus('hide');

        Animated.timing(
            logoScale,
            {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
            }
        ).start();
    }

    function handleNavigationToHome() {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#17518B" />
            <LinearGradient
                colors={["#17518B", "#000"]}
                style={style.container}
            >
                <Animated.View
                    style={[
                        style.logoView,
                        {
                            transform: [{
                                scale: logoScale
                            }]
                        }
                    ]}
                >
                    <Logo width={180} height={200} />
                </Animated.View>
                <View style={style.main}>
                    <InputFloat label="Login" />
                    <InputFloat label="Senha" secureText={true} />

                    <RectButton activeOpacity={0.8} style={style.buttonEnter} onPress={handleNavigationToHome}>
                        <Text style={style.buttonText}>
                            Entrar
                        </Text>
                    </RectButton>

                    <Text style={style.forgotPassword}> Esqueceu a senha?</Text>
                </View>
                <View style={style.footer}>
                    <View style={keyboardStatus === 'hide' ? style.viewButtonLeft : style.viewButtonLeftKeyboard}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={keyboardStatus === 'hide' ? [style.buttonLeft, style.facePropriety] : [style.buttonLeftKeyboard, style.faceProprietyKeyBoard]}
                        >
                            <Icon name="facebook-f" size={30} color="#fff" />
                        </TouchableOpacity >
                        <TouchableOpacity activeOpacity={0.8} style={keyboardStatus === 'hide' ? style.buttonLeft : style.buttonLeftKeyboard}>
                            <Google width="70%" height={40} />
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

export default Login;