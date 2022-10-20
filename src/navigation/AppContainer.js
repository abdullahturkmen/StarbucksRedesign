import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NavHead from '../components/header';
import {Image, Text, View} from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login"
                component={LoginScreen}
                options={
                    {headerShown: false}
                }/>
            <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={

                    NavHead('Starbucks')
                }/>
        </Stack.Navigator>
    );
}

const AppNavigationContainer = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Splash"
                screenOptions={
                    {tabBarShowLabel: false}
            }>
                <Tab.Screen name="homess"
                    component={HomeStack}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: () => (
                                <Image source={
                                    require(`../assets/icons/u_star.png`)
                                }/>
                            )
                        }
                    }/>
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: () => (
                                <Image source={
                                    require(`../assets/icons/u_cup.png`)
                                }/>
                            )
                        }
                    }/>
                <Tab.Screen name="Homec"
                    component={HomeScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: () => (
                                <Image source={
                                    require(`../assets/icons/u_credit-card.png`)
                                }/>
                            )
                        }
                    }/>
                <Tab.Screen name="Homes"
                    component={HomeScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: () => (
                                <Image source={
                                    require(`../assets/icons/u_location-point.png`)
                                }/>
                            )
                        }
                    }/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigationContainer;
