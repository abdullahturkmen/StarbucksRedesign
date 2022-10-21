/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Button,
    ImageBackground,
    ScrollView
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreenStyles from './style';

const HomeScreen = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={
                    isDarkMode ? 'light-content' : 'dark-content'
                }
                backgroundColor="#fff"/>

            <ScrollView>
                <View style={
                    {backgroundColor: "#F7F8FA"}
                }>

                    <View style={
                        {
                            margin: 20,
                            borderRadius: 20,
                            backgroundColor: '#4AA366',
                            overflow: 'hidden'
                        }
                    }>
                        <ImageBackground source={
                                require('../../assets/total-money-bg.png')
                            }

                            style={
                                {
                                    resizeMode: 'cover',
                                    justifyContent: 'center'
                                }
                        }>
                            <View style={
                                {padding: 20}
                            }>

                                <Text style={
                                    {
                                        color: 'white',
                                        marginTop: 40

                                    }
                                }>Toplam Param</Text>
                                <Text style={
                                    {
                                        color: 'white',
                                        fontSize: 30,
                                        fontWeight: 'bold'

                                    }
                                }>55,35 TL</Text>

                            </View>
                        </ImageBackground>
                    </View>


                    <Text style={
                        {padding: 20}
                    }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default HomeScreen;
