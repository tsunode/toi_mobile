
import React from 'react';
import { StyleSheet } from 'react-native';

// colors
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        backgroundColor: colors.background,
    },

    filterView: {
        backgroundColor: colors.dark_tertiary,
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
        backgroundColor: colors.dark_primary,
    },

    filterActive: {
        backgroundColor: colors.primary,
    },

    filterText: {
        color: colors.text,
        fontSize: 18,
        textAlign: 'center'
    },

    toiContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: colors.dark_secondary,
        marginVertical: 10
    },

    leftAction: {
        backgroundColor: colors.primary,
        marginVertical: 10,
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: 15
    },

    rightAction: {
        backgroundColor: colors.delete,
        marginVertical: 10,
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
        backgroundColor: colors.dark_primary,
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
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    modalView: {
        margin: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    modalText: {
        marginBottom: 15,
        color: colors.text,
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold'
    },

    checkModal: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    footerModal: {
        flexDirection: 'row'
    },

    buttonModal: {
        backgroundColor: colors.text,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 10,
        flex: 1
    },

    modalTextButton:{
        textAlign: 'center'
    }

})

export default styles;