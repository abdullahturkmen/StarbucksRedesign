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

import { getMenuData } from '../../data/menuData'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const ItemDetailsScreen = ({route,navigation}) => {

    const [dataState, setDataState] = useState([]);


    useEffect(() => {
        getMenuData().then(setDataState);
      }, []);

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
<ScrollView>
            { dataState['products']?.filter(e => e['id'] == route.params.id).map(e => (<View>
               <View style={{width: '100%'}}>
               <Image style={{width: '70%',borderRadius: 500,aspectRatio: 1, margin: '15%'}} source={{uri: e['imageLocation']}} />
               </View>
              
               
               <View style={{width: '100%', paddingHorizontal: 24, paddingBottom: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color :'#2E2D38', paddingBottom: 10}}>{e.name['tr_TR']}</Text>
                <Text style={{fontSize: 14, color :'#2E2D38',opacity: 0.5, lineHeight: 22}}>{e.description['tr_TR']}</Text>
               </View>

               <View style={{width: '100%', backgroundColor: '#FFF',paddingTop: 50,paddingHorizontal: 24, paddingBottom: 20,borderTopLeftRadius: 40,borderTopRightRadius: 40}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color :'#2E2D38', paddingBottom: 20}}>24.50 TL</Text>
                <TouchableHighlight style={
                                    {
                                        backgroundColor: '#4AA366',
                                        paddingVertical: 14,
                                        borderRadius: 6
                                    }
                                }
                                underlayColor=''
                                onPress={
                                    () => console.log("aldın mı şuan?")
                            }>
                                <Text style={
                                    {
                                        textAlign: 'center',
                                        color: '#fff'
                                    }
                                }>Satın Al</Text>
                            </TouchableHighlight>
               </View>
               
           </View>))  }
           </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1
    }
});

export default ItemDetailsScreen;
