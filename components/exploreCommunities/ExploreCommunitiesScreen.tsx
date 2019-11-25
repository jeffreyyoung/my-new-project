const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Image, Text, Switch, Slider } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../shared/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
//var ScrollableTabView = require('react-native-scrollable-tab-view');
const Tab = createMaterialTopTabNavigator();
let photos = [];
let i = 0;
while(i < 6) {photos.push(i++)}


function Row({renderLeft, renderRight}) {
    return <View style={{
        flex: 0,
        padding: 15,
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'}}>
        {renderLeft()}
        {renderRight()}
    </View>
}

export function ExploreCommunitiesScreen() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <Header>Explore Communities</Header>

        </ScrollView>
        </SafeAreaView>
    );
  }
