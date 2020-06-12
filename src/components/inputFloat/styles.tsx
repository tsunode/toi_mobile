import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    input: {
        borderBottomColor: "#f10",
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 0,
        paddingTop: 15
    },

    label: {
        position: "absolute",
        left: 0,
        fontSize: 18,
        // top: 18
    },

    labelFocus: {
        color: "#000",
        fontSize: 14,
        // top: 0
    }
});

export default style;