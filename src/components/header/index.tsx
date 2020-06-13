import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar} from 'react-native';

// svgs
import Logo from '../../assets/img/logo_escrita.svg';
import HeaderBar from '../../assets/img/header.svg';

// import IconToi from '../iconsToi.js'

const Header = () => {
    
    StatusBar.setBackgroundColor('#2A2626', true);

    return (
        <View style={styles.header}>
        <HeaderBar style={styles.headerBack} width={Dimensions.get('screen').width} height={55}/>
        <View style={styles.headerElem}>
            <Logo style={styles.logo} width={60} height={55}/>
        </View>
        <View style={styles.headerElem}>
            <Text style={styles.headerText}>Perguntar +</Text>
        </View>
        <View style={styles.headerElem}>
            <View style={styles.headerRight}>
                {/* <IconToi name="search" size={30} color="#FCAE12" /> */}
                <Image
                        style={styles.perfilImage}
                        source={require('../../assets/img/perfil.jpg')}
                    />
            </View>
        </View>
    </View> 
    )
}

const styles = StyleSheet.create({
    header:{
        width: Dimensions.get('screen').width,
        height:55,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A2626',
        margin:0,
        padding:0
    },

    headerElem:{
        flex:1,
    },

    headerBack:{
        position:'absolute'
    },

    logo:{
        marginLeft: 15,
    },

    headerText:{
        color: '#fff',
        textAlign: 'center',
        marginLeft: -15,
        fontSize: 16
    },

    headerRight:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        flexDirection:"row",
        marginRight: 15
    },

    perfilImage:{
        width:40,
        height:40,
        borderRadius:50,
        marginLeft: 15
    }
});



export default Header;