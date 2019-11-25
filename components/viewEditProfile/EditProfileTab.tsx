const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../shared/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
//var ScrollableTabView = require('react-native-scrollable-tab-view');
const Tab = createMaterialTopTabNavigator();
let photos = [];
let i = 0;
while(i < 6) {photos.push(i++)}

export function EditProfileTab() {
    return (
      <View style={{position: 'relative'}}>
        <ScrollView>
          <SafeAreaView style={{width: Dimensions.get('screen').width}}>
            <View style={{paddingHorizontal: 15}}>
                <Header>Jonathan</Header>
                <Text style={{fontSize: 18, marginVertical: 15}}>Photos</Text>
                <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                    {photos.map(p => <TouchableOpacity key={p}><Image
                        source={{uri: uri1}}
                        borderRadius={15}
                        style={{aspectRatio: 1, height: 75, width: 75, marginRight: 15, marginBottom: 15}}
                    /></TouchableOpacity>)}
                </View>
            
            
                <Text style={{fontSize: 18, marginVertical: 15}}>Conversation Starters</Text>
            </View>

            {photos.slice(0,3).map(p => (<TouchableOpacity key={p+'convo'} ><View style={{
                flex: 0,
                padding: 15,
                flexDirection: 'row',
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white'}}>
                <View>
                    <Text numberOfLines={1} style={{fontSize: 16, fontStyle: 'italic'}}>Believe it or not...</Text>
                    <Text numberOfLines={1} style={{fontSize: 16}}>I don't have a toe</Text>
                </View>
                <Feather size={18} name='edit'/>
            </View>
            </TouchableOpacity>))}
            <View style={{height: 150, width: 50}}></View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
