const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PersonProfile, NoThanksButton } from './../discover/PersonProfile';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';
import BottomSheet from 'reanimated-bottom-sheet'
import { SquareButton } from '../more/MoreScreen';
import { BlurView } from 'expo-blur';

function defaultRenderContent(pop) {
    return <SquareButton text='Cancel' onPress={pop}></SquareButton>
}

export function ModalScreen({route, navigation}) {
    const Content = route.params.Content;
    return (<SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Content pop={() => navigation.pop()} />
    </SafeAreaView>);
}