import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    main: {
        height: 60,
    },

    input: {
        color: '#fff',
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 0,
        paddingTop: 20
    },

    label: {
        position: "absolute",
        left: 0,
        fontSize: 18,
        color: '#fff'
    },

    labelFocus: {
        fontSize: 14,
        color: 'rgba(255,255,255, 0.7)'
    }
});

export default style;