const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Image, Text, Switch, Slider, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../shared/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommunityRow } from '../shared/CommunityRow';
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

export function CommunityTile({onPress}) {
    return <TouchableOpacity onPress={onPress}><ImageBackground source={{uri: uri1}} style={{
        aspectRatio: 5/4,
        width: '100%',
        borderRadius: 15,
        marginVertical: 15,
    }}
    borderRadius={15}
    >
        
    </ImageBackground>
    <Text style={{fontWeight: 'bold', marginBottom: 30}}>Ski/Snowboard Buddies ⛷ 🏂</Text>
    </TouchableOpacity>
}

export function ExploreCommunitiesScreen({navigation}) {
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <View style={{paddingHorizontal: 15}}>
                <Header>Explore Communities</Header>
            </View>
            
                <CommunityRow onPress={() => navigation.push('CommunityDetail')}/>
                <CommunityRow onPress={() => navigation.push('CommunityDetail')}/>
                <CommunityRow onPress={() => navigation.push('CommunityDetail')}/>

            <View style={{paddingHorizontal: 15, paddingBottom: 100}}>
                <View style={{flex: 0, flexDirection: 'row', marginTop: 30, flexWrap: 'wrap'}}>
                    <CommunityTile onPress={() => navigation.push('CommunityDetail')}/>
                    <CommunityTile onPress={() => navigation.push('CommunityDetail')}/>
                    <CommunityTile onPress={() => navigation.push('CommunityDetail')}/>
                </View>
            </View>
            

        </ScrollView>
        </SafeAreaView>
    );
  }
