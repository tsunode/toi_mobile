import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconToi from './config/icontoi';


import config from './routes.config';

import Login from './pages/Login';
import Received from './pages/Received';
import Sended from './pages/Sended';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => config({ route, focused, color, size })
            })}
            tabBarOptions={{
                activeTintColor: '#FBA700',
                inactiveTintColor: '#F5C056',
                activeBackgroundColor: '#2A2626',
                inactiveBackgroundColor: '#2A2626',
                style: {
                    // Remove border top on both android & ios
                    borderTopWidth: 0,
                    borderTopColor: "transparent",

                    elevation: 0,
                    shadowColor: '#5bc4ff',
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    shadowRadius: 0,
                }
            }}


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