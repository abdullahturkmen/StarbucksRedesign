import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import NavHead from '../components/header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigate = () => {
    return (
        <Tab.Navigator screenOptions={
            {tabBarShowLabel: false}
        }>
            <Tab.Screen name="homess"
                component={HomeScreen}
                options={
                    NavHead('Starbucks', 'favorite')
                }/>
            <Tab.Screen name="Order"
                component={OrderScreen}
                options={
                    NavHead('Sipariş Oluştur', 'cup')
                }/>
            <Tab.Screen name="Homec"
                component={HomeScreen}
                options={
                    NavHead('Sipariş Oluştur2', 'cc')
                }/>
            <Tab.Screen name="Homes"
                component={LoginScreen}
                options={
                    NavHead('Sipariş Oluştur3', 'location')
                }/>
        </Tab.Navigator>
    );
}

const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Login"
                    component={LoginScreen}
                    options={
                        {headerShown: false}
                    }/>
                <Stack.Screen name="Home"
                    component={TabNavigate}
                    options={
                        {headerShown: false}
                    }/>
                <Stack.Screen name="OrderScreen"
                    component={OrderScreen}
                    options={
                        NavHead('Sipariş Oluştur')
                    }/>
            </Stack.Navigator>

        </NavigationContainer>
    );
};


export default AppNavigationContainer;
