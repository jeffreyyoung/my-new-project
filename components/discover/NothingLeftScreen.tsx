const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, Dimensions, ActivityIndicator, Keyboard } from 'react-native';

export function NothingLeftScreen({ 
  navigation,
  titleText = "That's all for now 😄",
  subtitleText="Come back later to discover more people"
}) {

  return <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 25 }}>{titleText}</Text>
    <Text style={{ fontSize: 18 }}>{subtitleText}</Text>
    </View>

  </SafeAreaView>
}
