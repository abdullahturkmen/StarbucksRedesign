import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NavHead from '../components/header';
import {Image,Text,View} from 'react-native';
const Tab = createBottomTabNavigator();


const AppNavigationContainer = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Splash">
                <Tab.Screen name="Login"
                    component={LoginScreen}
                    options={
                      
                        NavHead('Starbucks', 'favorite')
                           
                    }/>
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={
                      NavHead('3242345', 'cup')
                        
                    }/>
                    <Tab.Screen name="Homec"
                    component={HomeScreen}
                    options={
                      NavHead('3242345', 'cc')
                    }/>
                    <Tab.Screen name="Homes"
                    component={HomeScreen}
                    options={
                      NavHead('3242345', 'u_location-point')
                    }/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigationContainer;
