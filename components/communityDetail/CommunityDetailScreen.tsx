const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Image, Text, Switch, Slider, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../shared/Header';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CircleIconButton } from '../shared/Button';
import { SquareButton } from '../more/MoreScreen';
import { LinearGradient } from 'expo'
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

export function CommunityDetailScreen({navigation}) {
    return (
      <View style={{position: 'relative'}}>
        <ScrollView>
            <ImageBackground
              style={{
                aspectRatio: 1,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 15,
                height: Dimensions.get('screen').width,
                width: Dimensions.get('screen').width
            }}
              source={{uri: uri1}}
            >
              <SafeAreaView style={{paddingTop: 15}}>  
                <CircleIconButton name='chevron-left' onPress={() => navigation.pop()} />
              </SafeAreaView>
              
            </ImageBackground>

                

            
            
            <View style={{backgroundColor: 'white'}}>
              <View style={{paddingHorizontal: 15}}>
                <Header>Ski/Snowboard Buddies</Header>
                <Text style={{marginTop: 15}}>Ski/Snowboard Buddies is a place to find friends with whom to go skiing ⛷ or snowboarding 🏂</Text>
              </View>
              <Text style={{paddingTop: 30, padding: 15}}>Rules</Text>
              <Row 
                renderLeft={() => <Text>1. Don't be creepy</Text>}
                renderRight={() => <View></View>}
              />
              <Row 
                renderLeft={() => <Text>2. Do invite people to enjoy the fresh powder</Text>}
                renderRight={() => <View></View>}
              />

              <View style={{padding: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <SquareButton onPress={() => {}} backgroundColor={'#ddd'} text={'Join'}/>
              </View>
              <View style={{height: 100, width: 100}}></View>
            </View>
          
        </ScrollView>
      </View>
    );
  }
