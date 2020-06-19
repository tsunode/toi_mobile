import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";

import IconToi from '../../config/icontoi';

// Components
import Header from '../../components/header';

// Styles
import styles from './styles'
import colors from '../../styles/colors';

const Sended = () => {

    const [numberLines, setNumberLines] = useState(1);

    function handleSeeAll() {
        numberLines === 1 ? setNumberLines(0) : setNumberLines(1);
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.toiContainer}>
                    <View style={styles.toiHeader}>
                        <View style={styles.description}>
                            <Text style={styles.headerText}>
                                Dúvida sobre React Native
                            </Text>
                            <Text style={styles.headerTime}>
                                Ontem
                            </Text>
                        </View>
                        <IconToi name='sended' size={50} color={colors.text} />
                    </View>
                    <View style={styles.toiMain}>
                        <Text style={styles.mainText} numberOfLines={numberLines}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vitae sed minima tempora fugiat? Fuga animi vero dolorem, et ipsam non enim, rerum reiciendis deleniti, eum atque? Commodi, molestiae beatae!
                        </Text>
                        <Text style={styles.seeAllText} onPress={handleSeeAll}>
                            {numberLines === 1 ? 'Ver mais' : 'Ver menos'}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.sendButton} activeOpacity={0.6}>
                            <View style={styles.iconSend}>  
                                <Text style={styles.countSend}>
                                    +99
                                </Text>
                                <IconToi name='send' size={40} color={colors.text} />
                            </View>
                            <Text style={styles.textSendButton}>Ver Respostas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )

}

export default Sended;