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
    Header
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from './style';

const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={
            styles.sectionContainer
        }>
            <Text style={
                [
                    styles.sectionTitle, {
                        color: isDarkMode ? Colors.white : Colors.black
                    },
                ]
            }>
                {title} </Text>
            <Text style={
                [
                    styles.sectionDescription, {
                        color: isDarkMode ? Colors.light : Colors.dark
                    },
                ]
            }>
                {children} </Text>
        </View>
    );
};

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


            <View style={
                {
                    backgroundColor: "#F7F8FA",
                }
            }>
                <Text>This is 's profile</Text>
                <Section title="HomeScreen">
                    Edit
                    <Text style={
                        styles.highlight
                    }>cvbcvb.js</Text>
                    to change this
                                screen and then come back to see your edits.
                </Section>

                <Button title="Go to LoginScreen"
                    onPress={
                        () => navigation.navigate('Login')
                    }/>

            </View>

        </SafeAreaView>
    );
};


export default HomeScreen;
