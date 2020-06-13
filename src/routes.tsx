import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import config from './routes.config';

import Login from './pages/Login';
import Home from './pages/Home';


const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeBackgroundColor: "#2A2626"}}>
            <Tab.Screen name="Toi recebido" component={Home} />
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