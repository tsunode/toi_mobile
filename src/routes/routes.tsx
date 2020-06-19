import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// configs
import config from './routes.config';

// routes
import Login from '../pages/Login';
import Received from '../pages/Received';
import Sended from '../pages/Sended';
import Profile from '../pages/Profile';

const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => config.screenOptions({ route, focused, color, size })
            })}
            tabBarOptions={config.tabBarOptions}
        >
            <Tab.Screen name="Toi recebido" component={Received} />
            <Tab.Screen name="Toi enviado" component={Sended} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode='none'
            >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Home" component={TabNavigator} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}

export default Routes;