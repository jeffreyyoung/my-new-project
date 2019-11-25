const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, Dimensions, ActivityIndicator, Keyboard } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { theme } from '../shared/Theme';
import { PersonThatLikedMeScreen } from './PersonThatLikedMeScreen';
import { LoadingPersonScreen } from '../discover/LoadingScreen';
import { NothingLeftScreen } from '../discover/NothingLeftScreen';

const Stack = createStackNavigator();

let counter = 0;


export function LikesMeScreen({ navigation }) {
  let options = {
    ...TransitionPresets.ModalSlideFromBottomIOS,
    headerShown: false,
    gestureEnabled: false
  }

  return (
    <Stack.Navigator
    >
      <Stack.Screen name='likes-me/loading' component={LoadingPersonScreen}
      initialParams={{
        afterTwoSeconds: (props) => props.navigation.replace('likes-me/person')
      }}
      options={{
        ...options
      }} />
      <Stack.Screen name='likes-me/person' options={{
        ...options
      }} component={PersonThatLikedMeScreen} />
      <Stack.Screen name='likes-me/none-left' options={{
        ...options
      }} component={(props) => <NothingLeftScreen {...props} titleText="" subtitleText="New likes will appear here"/>} />
    </Stack.Navigator>
  );
}
