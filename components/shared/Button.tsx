const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function CircleIconButton({name, onPress}) {
    return <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 100}}>
    <Feather name={name} size={30}/>
  </TouchableOpacity>
}
