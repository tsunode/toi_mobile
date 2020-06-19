import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";

// Components
import Header from '../../components/header';

// Styles

import styles from './styles'

const Sended = () => {

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Text>
                    Teste
                </Text>
            </View>

        </>
    )

}

export default Sended;