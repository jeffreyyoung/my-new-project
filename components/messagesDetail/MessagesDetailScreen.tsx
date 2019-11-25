const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Text } from 'react-native';
import { PersonProfile, NoThanksButton } from './../discover/PersonProfile';
import { Chat } from './Chat';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DiscoverScreen } from '../discover/DiscoverScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
//var ScrollableTabView = require('react-native-scrollable-tab-view');
const Tab = createMaterialTopTabNavigator();

export function ProfileTab() {
    return (
      <View style={{position: 'relative'}}>
        <ScrollView>
          <SafeAreaView style={{paddingHorizontal: 100, width: Dimensions.get('screen').width}}>
            <PersonProfile onLike={() => {
            }} onNoThanks={() => {
            }}/>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }

export function MessagesDetailScreen() {
  return (
      // <Chat tabLabel=''/>
  //   <ScrollableTabView
  //       style={{marginTop: 10}}
  //   >
  //   <Chat tabLabel="Chat" />
  //   <ProfileTab tabLabel="Profile" />
    
  // </ScrollableTabView>


    <Tab.Navigator
      tabBarOptions={{
        upperCaseLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          backgroundColor: 'black'
        },
        indicatorContainerStyle: {
          backgroundColor: 'white'
        }
        
      }}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}