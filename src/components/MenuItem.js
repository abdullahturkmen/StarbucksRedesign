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

import OrderScreenStyles from '../screens/OrderScreen/style';

const MenuItem = ({ navigation,details }) => {
    return (<View key={details['id']} style={{display: 'flex',flexDirection: 'row',marginBottom: 10}}>
    <Pressable title='Detay' onPress={
                                () => navigation.navigate('ItemDetailsScreen', {id: details["id"]})
                        }><Image style={{width: 80, height: 80, borderRadius: 100, marginRight: 20}} source={{uri: details['imageLocation']}} /></Pressable>
    <View style={{flex: 1}}>
    <Pressable title='Detay' onPress={
                                () => navigation.navigate('ItemDetailsScreen', {id: details["id"]})
                        }><Text style={{color: '#2E2D38', fontSize: 20, fontWeight: 'bold'}}>{details.name["tr_TR"]}</Text></Pressable>
    <Text style={{color: '#2E2D38'}}>20 TL</Text>
    <View style={{display: 'flex', alignSelf: 'flex-end'}}><Pressable style={OrderScreenStyles.itemAddCartBtn} title='Ekle'><Text style={{color: '#FFF'}}>Ekle</Text></Pressable></View>
    </View>
</View>)
}

export default MenuItem