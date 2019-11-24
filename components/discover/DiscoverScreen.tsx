const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { PersonProfile, NoThanksButton } from './PersonProfile';

export function DiscoverScreen({navigation}) {
  return (
    <View style={{position: 'relative'}}>
      <ScrollView>
        <SafeAreaView style={{paddingHorizontal: 100}}>
          <PersonProfile onLike={() => {
              navigation.push('LikeModal');
          }} onNoThanks={() => {
            navigation.push('LikeModal');
          }}/>
        </SafeAreaView>
      </ScrollView>
      <View style={{position: "absolute", bottom: 30, left: 30}}>
        <NoThanksButton onPress={() => {
            navigation.push('LikeModal');
        }}/>
      </View>
    </View>
  );
}
