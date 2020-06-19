import React from 'react'
import { View, Text, Image, Dimensions, StatusBar} from 'react-native';
import IconToi from '../../config/icontoi';

// svgs
import Logo from '../../assets/img/logo_escrita.svg';
import HeaderBar from '../../assets/img/header.svg';

// styles
import styles from './styles';
import colors from '../../styles/colors';

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
                <IconToi name="search" size={30} color={colors.primary} />
                <Image
                        style={styles.perfilImage}
                        source={require('../../assets/img//test/perfil.jpg')}
                    />
            </View>
        </View>
    </View> 
    )
}

export default Header;