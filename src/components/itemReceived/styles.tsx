
import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    toiContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        margin: 2,
        backgroundColor: '#1D1A1A',
    },

    toiContainerSave:{
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#FCAE12',
        backgroundColor: 'transparent',
        display: 'none',
    },

    leftAction: {
        backgroundColor: '#FCAE12',
        marginVertical: 13,
        flex: 0.3,
        justifyContent: 'center',
        paddingLeft: 15
    },

    rightAction: {
        backgroundColor: '#f10',
        marginVertical: 13,
    },

    rightButton: {
        flex: 1, 
        width: '100%', 
        paddingHorizontal: 15,
        justifyContent: 'center'
    },

    actionText: {
        fontSize: 18
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    toiHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userImage: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 10
    },

    userName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    userDescription: {
        color: '#fff'
    },

    timeRecived: {
        color: '#fff'
    },

    toiMain: {
        backgroundColor: '#2A2626',
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },

    toiMainSave:{
        backgroundColor: '#7D632E',
    },

    toiMainText: {
        color: '#fff',
        fontSize: 18
    },

    toiFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },

    toiFooterButton: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    toiFooterText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 5,
    }
})

export default style;