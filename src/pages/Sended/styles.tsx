import React from 'react';
import { StyleSheet } from 'react-native';

// colors
import colors from '../../styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 5
    },

    toiContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: colors.background_card,
        marginVertical: 10
    },

    toiHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    headerText: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold'
    },

    headerTime: {
        color: colors.text,
        fontSize: 16,
        textAlign: 'right'
    },

    description: {
        marginRight: 10,
        marginTop: -5
    },

    toiMain: {
        backgroundColor: colors.dark_primary,
        borderRadius: 20,
        marginVertical: 10,
        padding: 10
    },

    mainText: {
        color: colors.text,
        fontSize: 20
    },

    seeAllText: {
        fontSize: 15,
        color: colors.primary
    },

    sendButton: {
        backgroundColor: colors.dark_primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 15,
        marginBottom: 10
    },

    iconSend: {
        alignSelf: 'center',
        marginHorizontal: 5
    },

    countSend: {
        backgroundColor: colors.dark_secondary,
        color: colors.primary,
        position: 'absolute',
        borderRadius: 50,
        textAlignVertical: 'center',
        right: -8,
        top: -5,
        width: 25,
        height: 25,
        textAlign: 'center',
        zIndex: 1001,
        fontSize: 11,
        fontWeight: "bold"
    },

    textSendButton: {
        color: colors.text,
        marginHorizontal: 5,
        fontSize: 18
    }

});

export default styles;