import React from 'react';
import { } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import IconToi from './config/icontoi';

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
        iconColor = props.focused ? '#FBA700' : '#F5C056';
        iconName = 'received';
    } else if (props.route.name === 'Toi enviado') {
        iconColor = props.focused ? '#FBA700' : '#F5C056';
        iconName = 'sended';
    } else if (props.route.name === 'Perfil') {
        iconColor = props.focused ? '#FBA700' : '#F5C056';
        iconName = 'profile';
    }

    // You can return any component that you like here!
    return <IconToi name={String(iconName)} size={23} color={iconColor} />;

}


export default screenOptions;