
import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        backgroundColor: '#000',
    },

    filterView: {
        backgroundColor: '#3E3838',
        minWidth: 100,
        maxWidth: 150,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 15
    },

    filterContainer: {
        paddingVertical: 5,
        backgroundColor: '#2A2626'
    },

    filterActive: {
        backgroundColor: '#FCAE12',
    },

    filterText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },

    toiContainer: {
        // padding: 15,
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: '#1D1A1A',
        marginVertical: 10
    },

    leftAction: {
        backgroundColor: '#FCAE12',
        marginVertical: 10,
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 15
    },

    rightAction: {
        backgroundColor: '#f10',
        marginVertical: 10,
        // flex: 0.3,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 15
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