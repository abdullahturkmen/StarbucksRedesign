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
    ScrollView,
    Pressable 
} from 'react-native';

import { getMenuData } from './menuData';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import OrderScreenStyles from './style';

const menuDataItem = (details) => {
    return (<View key={details['id']} style={{display: 'flex',flexDirection: 'row',marginBottom: 10}}>
    <Image style={{width: 80, height: 80, borderRadius: 100, marginRight: 20}} source={{uri: details['imageLocation']}} />
    <View style={{flex: 1}}>
    <Text style={{color: '#2E2D38', fontSize: 20, fontWeight: 'bold'}}>{details.name["tr_TR"]}</Text>
    <Text style={{color: '#2E2D38'}}>20 TL</Text>
    <View style={{display: 'flex', alignSelf: 'flex-end'}}><Pressable style={OrderScreenStyles.itemAddCartBtn} title='Ekle'><Text style={{color: '#FFF'}}>Ekle</Text></Pressable></View>
    </View>
</View>)
}

const OrderScreen = ({navigation}) => {
    const [scrollMenuSelect, setScrollMenuSelect] = useState('all');
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
                        overflow: 'hidden',
                        backgroundColor: '#FFF',
                        marginTop: 10
                    }
                }>
                    <Text style={{paddingLeft: 10, paddingBottom: 20, fontSize: 16, fontWeight: 'bold', color: '#000'}}>Menu</Text>
                    <ScrollView horizontal={true}>

                        <Pressable style={OrderScreenStyles.menuCategoryBtn} title="all"
                            onPress={
                                () => setScrollMenuSelect('all')
                        }><Text>Hepsi</Text></Pressable >
                        { dataState && dataState['categories'].map((e, index) => (
                           
                            <Pressable key={index} style={OrderScreenStyles.menuCategoryBtn} title={e.name['tr_TR']}
                            onPress={
                                () => setScrollMenuSelect(e['parent'])
                        }><Text>{e.name['tr_TR']}</Text></Pressable>
                        ))}
                        
                        

                    </ScrollView>


                </View>

                <View style={{backgroundColor: '#FFF'}}>
                   
                     <ScrollView style={{padding: 10}}>
                        { dataState && scrollMenuSelect === "all" ?
                             dataState['products'].map(e => (
                                        
                                    menuDataItem(e)
                                
                            ))
                        : 
                        dataState['products'].filter(e => e.categories.includes(scrollMenuSelect)).map(e => (
                               
                                    menuDataItem(e)
                              
                            ))
                        }
                    </ScrollView> 
                </View>


            </View>

        </SafeAreaView>
    );
};


export default OrderScreen;
