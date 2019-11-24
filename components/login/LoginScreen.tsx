const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { View, SafeAreaView, Image, Button } from 'react-native';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../../App';
import { RouteProp } from '@react-navigation/stack/lib/typescript/core/src';

type LoginScreenNavigationProp = StackNavigationProp<
  RootParamList,
  'Login'
>;
type ProfileScreenRouteProp = RouteProp<RootParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp,
    route: ProfileScreenRouteProp
}

export function LoginScreen(props: Props) {
    console.log(Object.keys(props));
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <SafeAreaView>
          <Button title="Login" onPress={() => {props.navigation.replace('Home')}} />
        </SafeAreaView>
    </View>
  );
}

