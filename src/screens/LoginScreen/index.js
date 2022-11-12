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
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const LoginScreen = ({navigation}) => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={
                    isDarkMode ? 'light-content' : 'dark-content'
                }
                backgroundColor={
                    backgroundStyle.backgroundColor
                }/>

            <View style={
                {height: '100%'}
            }>
                <View style={
                    {
                        flex: 1,
                        backgroundColor: "#F7F8FA",
                        padding: 20
                    }
                }>
                    <ImageBackground source={
                            require('../../assets/login-bg.png')
                        }
                        resizeMode="cover"
                        style={
                            styles.bgImage
                    }>


                        <ScrollView>
                            <Image source={
                                    require('../../assets/sb-green-text-logo.png')
                                }
                                style={
                                    {marginVertical: 50}
                                }/>

                            <Text style={
                                {
                                    fontWeight: 'bold',
                                    fontSize: 30,
                                    color: '#2E2D38',
                                    marginBottom: 24
                                }
                            }>Welcome back!</Text>

                            <Text style={
                                {
                                    marginBottom: 30,
                                    color: '#4D5661'
                                }
                            }>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</Text>

                            <TextInput style={
                                    {
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        paddingVertial: 4,
                                        borderRadius: 6,
                                        borderWidth: 1,
                                        borderColor: '#B4BBCB',
                                        marginBottom: 10
                                    }
                                }
                                placeholder="Email"/>

                            <TextInput style={
                                    {
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        paddingVertial: 4,
                                        borderRadius: 6,
                                        borderWidth: 1,
                                        borderColor: '#B4BBCB',
                                        marginBottom: 30
                                    }
                                }
                                placeholder="Password"
                                secureTextEntry={true}/>

                            <TouchableHighlight style={
                                    {

                                        paddingVertical: 10,
                                        marginTop: 20,
                                        marginBottom: 40

                                    }

                                }
                                onPress={
                                    () => navigation.navigate('Home')
                                }
                                underlayColor=''>
                                <Text style={
                                    {
                                        textAlign: 'right',
                                        color: '#4D5661',
                                        fontWeight: 'bold'
                                    }
                                }>Forgot your password?</Text>
                            </TouchableHighlight>


                            <TouchableHighlight style={
                                    {
                                        backgroundColor: '#4AA366',
                                        paddingVertical: 14,
                                        borderRadius: 6
                                    }
                                }
                                underlayColor=''
                                onPress={
                                    () => navigation.navigate('Home')
                            }>
                                <Text style={
                                    {
                                        textAlign: 'center',
                                        color: '#fff'
                                    }
                                }>Login</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1
    }
});

export default LoginScreen;
