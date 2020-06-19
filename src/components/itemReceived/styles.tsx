
import React from 'react';
import { StyleSheet } from 'react-native';

// colors

import colors from '../../styles/colors';

const styles = StyleSheet.create({

    toiContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        margin: 2,
        backgroundColor: colors.background_card,
    },

    toiContainerSave:{
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
        display: 'none',
    },

    leftAction: {
        backgroundColor:  colors.primary,
        marginVertical: 13,
        flex: 0.3,
        justifyContent: 'center',
        paddingLeft: 15
    },

    rightAction: {
        backgroundColor:  colors.delete,
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
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 18
    },

    userDescription: {
        color: colors.text
    },

    timeRecived: {
        color: colors.text
    },

    toiMain: {
        backgroundColor:  colors.dark_primary,
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },

    toiMainText: {
        color: colors.text,
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
        color: colors.text,
        fontSize: 18,
        marginLeft: 5,
    }
})

export default styles;