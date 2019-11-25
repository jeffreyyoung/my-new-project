const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PersonProfile, NoThanksButton } from './../discover/PersonProfile';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';


export function LikesMeScreen() {
  return (
    <SafeAreaView style={{position: 'relative'}}>
      <ScrollView>
        
          <View style={{paddingHorizontal: 15}}>
            <Header>Liked Me</Header>
            
          <View style={{position: 'relative', backgroundColor: 'white', justifyContent: 'flex-end', marginTop: 15, borderRadius: 25, padding: 30}}>
            <Text style={{fontSize: 16, marginBottom: 15}}>Jonathan said...</Text>
            <View style={{padding: 15, backgroundColor: '#ddd', borderRadius: 30}}>
              <Text>Omg your response to belive it or not is so funny! 🤣</Text>
            </View>
            <View style={{paddingTop: 15}}>
              <Button onPress={() => {}} title='Match with Jonathan' />
            </View>


          </View>

          </View>
          
          <PersonProfile onLike={() => {}} onNoThanks={() => {}} />
        
      </ScrollView>
      <View style={{position: "absolute", bottom: 30, left: 30}}>
        <NoThanksButton onPress={() => {}}/>
      </View>
      </SafeAreaView>
  );
}

function MessagesScreen() {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <ScrollView>
        <SafeAreaView>
          <View style={{paddingHorizontal: 15}}>
            <Header>Messages</Header>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{position: "absolute", bottom: 30, right: 30}}>
        <CircleIconButton name='plus' onPress={() => {}}/>
      </View>
    </View>
  );
}


function MeScreen() {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <ScrollView>
        <SafeAreaView>
          <View style={{paddingHorizontal: 15}}>
            <TouchableOpacity>
              <Header>Ski/Snowboard Buddies <Feather size={36} name='chevron-down'/></Header>
            </TouchableOpacity>
            <View style={{paddingTop: 25, justifyContent: 'center', flexDirection: 'column', flex: 1,}}>
              <Image source={{uri: uri1}} style={{width: '50%', aspectRatio:1, marginTop: 15}} borderRadius={100} />
              <Button title="View Profile" onPress={() => {}}></Button>
              <Button title="Edit Profile" onPress={() => {}}></Button>
              <Button title="Edit Search Settings" onPress={() => {}}></Button>
              <Button title="Leave Skiing" onPress={() => {}}></Button>
              

            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{position: "absolute", bottom: 30, right: 30}}>
        <CircleIconButton name='plus' onPress={() => {}}/>
      </View>
    </View>
  );
}
