import React from 'react';
import { } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import IconToi from '../config/icontoi';

// colors
import colors from '../styles/colors';

interface Props {
    route: RouteProp<Record<string, object | undefined>, string>;
    focused: boolean;
    color: string;
    size: number;
}

const screenOptions = (props: Props) => {


    let iconColor;
    let iconName;

    if (props.route.name === 'Toi recebido') {
        iconColor = props.focused ? colors.primary : colors.secondary;
        iconName = 'received';
    } else if (props.route.name === 'Toi enviado') {
        iconColor = props.focused ? colors.primary : colors.secondary;
        iconName = 'sended';
    } else if (props.route.name === 'Perfil') {
        iconColor = props.focused ? colors.primary : colors.secondary;
        iconName = 'profile';
    }

    return <IconToi name={String(iconName)} size={23} color={iconColor} />;

}

const tabBarOptions = {

    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    activeBackgroundColor: colors.dark_primary,
    inactiveBackgroundColor: colors.dark_primary,
    style: {
        borderTopWidth: 0,
        borderTopColor: "transparent",
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
    }
}


export default { screenOptions, tabBarOptions };