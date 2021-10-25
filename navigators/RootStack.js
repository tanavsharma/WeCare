import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Colors} from './../components/styles';
const {logoColor} = Colors;

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Profile from './../screens/Profile';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: logoColor,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                    paddingLeft: 20
                }
                }}
                initialRouteName="Login"
                >

                

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;

