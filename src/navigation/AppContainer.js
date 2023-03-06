import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import NavHead from '../components/header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigate = () => {
    return (<Tab.Navigator screenOptions={
        {tabBarShowLabel: false}
    }>
        <Tab.Screen name="homess"
            component={HomeScreen}
            options={
                <NavHead title="Starbucks 1" icon="favorite" backBtn={false}  />
            }/>
        <Tab.Screen name="Order"
            component={OrderScreen}
            options={
             
                <NavHead title="Starbucks 2" icon="cup" backBtn={false} />
            }/>
        <Tab.Screen name="Homec"
            component={HomeScreen}
            options={
           
                <NavHead title="Starbucks 3" icon="cc" backBtn={false} />
            }/>
        <Tab.Screen name="Homes"
            component={LoginScreen}
            options={
          
                <NavHead title="Starbucks 4" icon="location" backBtn={false} />
            }/>
    </Tab.Navigator>);
}

const AppNavigationContainer = () => {
    return (<NavigationContainer>
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
              
                    <NavHead title="Sipariş Oluştur" icon="" backBtn={false} />
                }/>
            <Stack.Screen name="ItemDetailsScreen"
                component={ItemDetailsScreen}
                options={
               
                    <NavHead title="Ürün Detayı" icon="" backBtn={true} />
                }/>
        </Stack.Navigator>

    </NavigationContainer>);
};


export default AppNavigationContainer;
