/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
    ScrollView
} from 'react-native';

import { getMenuData } from './menuData';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import OrderScreenStyles from './style';

const menuDataItem = (details) => {
    return (<View style={{display: 'flex',flexDirection: 'row',marginBottom: 10}}>
    <Image style={{width: 80, height: 80, borderRadius: 100, marginRight: 20}} source={{uri: details['image']}} />
    <View style={{flex: 1}}>
    <Text style={{color: '#2E2D38', fontSize: 20, fontWeight: 'bold'}}>{details['title']}</Text>
    <Text style={{color: '#2E2D38'}}>20 TL</Text>
    <View style={{display: 'flex', justifyContent: 'flex-end'}}><Button style={{width: 'max-content'}} title='Ekle'></Button></View>
    </View>
</View>)
}

const OrderScreen = ({navigation}) => {
    const [scrollMenu, setScrollMenu] = useState('all');
    const [dataState, setDataState] = useState([]);
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    useEffect(() => {
        getMenuData().then(setDataState);
      }, []);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={
                    isDarkMode ? 'light-content' : 'dark-content'
                }
                backgroundColor="#fff"/>


            <View style={
                {backgroundColor: "#F7F8FA"}
            }>
                

                <View style={
                    {
                        paddingVertical: 20,
                        overflow: 'hidden'
                    }
                }>
                    <Text>{scrollMenu}</Text>
                    <ScrollView horizontal={true}>

                        <Button title="all"
                            onPress={
                                () => setScrollMenu('all')
                        }></Button>
                        {dataState.map(e => (
                           
                            <Button title={e.categoryName}
                            onPress={
                                () => setScrollMenu(e.categoryName)
                        }></Button>
                        ))}
                        
                        

                    </ScrollView>


                </View>

                <View>
                    <ScrollView style={{padding: 10}}>
                        { scrollMenu === "all" ?
                             dataState.map(e => (
                                e.items.map(x => (         
                                    menuDataItem(x)
                                ))
                            ))
                        : 
                             dataState.filter(e => e.categoryName == scrollMenu).map(e => (
                                e.items.map(x => (
                                    menuDataItem(x)
                                ))
                            ))
                        }
                    </ScrollView>
                </View>


            </View>

        </SafeAreaView>
    );
};


export default OrderScreen;
