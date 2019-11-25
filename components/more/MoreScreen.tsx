const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PersonProfile, NoThanksButton } from './../discover/PersonProfile';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';
import BottomSheet from 'reanimated-bottom-sheet'

export function SquareButton({text, onPress, backgroundColor = 'white', textColor = 'black'}) {
  return <TouchableOpacity onPress={onPress}>
    <View style={{flex:0, marginTop: 15, flexDirection: 'row', alignItems: 'center', backgroundColor:backgroundColor, width: '100%', padding: 15}}>
      <Text style={{fontSize: 18, color: textColor}}>{text}</Text>
      <Feather size={18} color={textColor} name='chevron-right' />
    </View>
  </TouchableOpacity>
}

export function MoreScreen({navigation, showCommunitySwitcher}) {

  return (
    <View style={{position: 'relative', flex: 1}}>
      <ScrollView>
        <SafeAreaView>
            <View style={{paddingHorizontal: 15}}>
            <TouchableOpacity onPress={showCommunitySwitcher}>
              <Header>Ski/Snowboard Buddies <Feather size={36} name='chevron-down'/></Header>
            </TouchableOpacity>
            </View>
            <View style={{paddingTop: 25, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1,}}>
              <View style={{flex:1, marginBottom: 30,  width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.push('ViewEditProfile')}>
                  <Image source={{uri: uri1}} style={{width: Dimensions.get('screen').width/2, aspectRatio:1, marginTop: 15}} borderRadius={Dimensions.get('screen').width/4} />
                </TouchableOpacity>
              </View>
              
              
              <SquareButton text="View/Edit Profile" onPress={() => navigation.push('ViewEditProfile')}></SquareButton>
              <SquareButton text="Edit Discover Settings" onPress={() => navigation.push('EditDiscoverSettings')}></SquareButton>
              <SquareButton text="View Community" onPress={() => navigation.push('CommunityDetail')}></SquareButton>
              <SquareButton text="Leave Skiing" onPress={() => {
                Alert.alert(
                  'Are you sure?', 
                  'All of your matches in this community will be lost.',
                  [{
                    text: 'Leave Skiing/Snowboard Buddies',
                    onPress: () => {},
                  }, {
                    text: 'Cancel',
                    onPress: () => {},
                    style:'cancel' 
                  }]
                )
              }}></SquareButton>
            </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
