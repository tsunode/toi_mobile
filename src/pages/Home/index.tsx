import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Componentes
import InputFloat from '../../components/inputFloat'

const Home = () => {
    return (
        <LinearGradient
            colors={["#17518B", "#000"]}
            style={{ flex: 1 }}
        >
            <View style={style.container}>
                <InputFloat label="Login" />
                <InputFloat label="Senha" secureText={true} />
            </View>
        </LinearGradient>

    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
})

export default Home;