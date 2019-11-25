import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

export function CommunityRow({onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={{flex: 0, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd', justifyContent: 'flex-start',padding: 15, alignItems: 'center'}}>
            <Image style={{aspectRatio: 1, borderRadius: 75/2, width: 75, height: 75}} source={{uri: uri1}}></Image>
            <Text style={{marginLeft: 15, fontSize: 18}}>Ski/Snowboard Buddies 🏂⛷</Text>
        </View>
    </TouchableOpacity>);
}

export function AddCommunityRow({onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={{flex: 0, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd', justifyContent: 'flex-start',padding: 15, alignItems: 'center'}}>
            <View style={{aspectRatio: 1, flex: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 75/2, width: 75, height: 75}}>
                <Feather size={40} name='plus'/>
            </View>
            <Text style={{marginLeft: 15, fontSize: 18}}>Join another community</Text>
        </View>
    </TouchableOpacity>);
}