import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 55,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dark_primary,
        margin: 0,
        padding: 0
    },

    headerElem: {
        flex: 1,
    },

    headerBack: {
        position: 'absolute'
    },

    logo: {
        marginLeft: 15,
    },

    headerText: {
        color: colors.text,
        textAlign: 'center',
        marginLeft: -15,
        fontSize: 16
    },

    headerRight: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginRight: 15
    },

    perfilImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 15
    }
});

export default styles;