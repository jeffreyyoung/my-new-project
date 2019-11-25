const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';


let messages = [];
let i = 0;
while (i < 50) { messages.push(i++); }

function ConversationPreview({item, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={{backgroundColor: 'white', padding:15, flex: 1, flexDirection: 'row'}} key={'key'+item}>
            <Image source={{uri: uri1}} style={{aspectRatio: 1}} height={75} width={75} borderRadius={75/2}/>
            <View style={{flex:1, flexDirection: 'column', paddingLeft: 15, justifyContent: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Jonathan</Text>
                    <Text style={{paddingBottom: 2, paddingLeft: 5, color: 'gray'}}>{`${item}m`}</Text>
                </View>
                <Text numberOfLines={2} ellipsizeMode="tail">Omg hey! Omg hey! Omg hey! Omg hey! Omg hey! Omg hey! Omg hey! Omg hey! Omg hey!</Text>
            </View>
        </View>
    </TouchableOpacity>);
}

export function MessagesScreen({navigation}) {
  return (
    <View style={{position: 'relative', backgroundColor: 'white', flex: 1}}>
        <SafeAreaView>
            <FlatList
                data={messages}
                ListHeaderComponent={<View style={{paddingHorizontal: 15, paddingBottom: 15}}>
                    <Header>Messages</Header>
                </View>}
                renderItem={({item}) => <ConversationPreview item={item} onPress={() => {
                    
                    navigation.push('MessagesDetail')
                }} />}
                keyExtractor={(key) => 'yay'+key}
            
            />
        </SafeAreaView>
      <View style={{position: "absolute", bottom: 30, right: 30}}>
        <CircleIconButton name='plus' onPress={() => {}}/>
      </View>
    </View>
  );
}

