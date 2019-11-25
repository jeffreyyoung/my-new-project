const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, Dimensions, ActivityIndicator, Keyboard } from 'react-native';
import { PersonProfile, NoThanksButton, ConversationStarterCard } from './PersonProfile';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SendLikeModalContent } from './SendLikeModalContent';
import { theme } from '../shared/Theme';
import { LoadingPersonScreen } from './LoadingScreen';
import { NothingLeftScreen } from './NothingLeftScreen';

const Stack = createStackNavigator();

let counter = 0;



export function DiscoveredPersonScreen({ navigation, ...props }) {
  
  function navigate() {
    counter++;
    if (counter % 4 === 0) {
      if (counter === 4 * 10) {
        navigation.replace('explore/none-left')
      } else {
        navigation.replace('explore/loading', {
          afterTwoSeconds: ({navigation}) => navigation.replace('explore/person')
        })
      }

    } else {
      navigation.replace('explore/person');
    }
  }

  function onLike() {
    navigation.navigate('Modal', {
      Content: ({pop}) => (<SendLikeModalContent 
        SubjectContent={() => <ConversationStarterCard backgroundColor='#ddd' onLike={props.onLike} prompt="When/Where you can find me skiing..." answer="Alta and Snowbird every Saturday and Sunday... also when I get sick 🤫" />}
        pop={pop}
        onSuccess={navigate}/>)
    })
  }


  return (
    <View style={{ position: 'relative' }}>
      <SafeAreaView>
        <ScrollView>
          <PersonProfile onLike={onLike} onNoThanks={navigate} />
          <PaddedReportButton onPress={() => {}} name='Jonathan' />
        </ScrollView>
      </SafeAreaView>
      <View style={{ position: "absolute", bottom: 30, left: 30 }}>
        <NoThanksButton onPress={navigate} />
      </View>
    </View>
  );
}

export function PaddedReportButton({onPress, name}) {
  return (<View style={{ paddingTop: 46, paddingHorizontal: 15, paddingBottom: 45 }}>
    <Button color="black" title={`Report ${name}`} onPress={onPress}></Button>
  </View>)
}


export function DiscoverScreen({ navigation }) {
  let options = {
    ...TransitionPresets.ModalSlideFromBottomIOS,
    headerShown: false,
    gestureEnabled: false
  }

  return (
    <Stack.Navigator
    >
      <Stack.Screen name='explore/loading' component={LoadingPersonScreen}
      initialParams={{
        afterTwoSeconds: (props) => props.navigation.replace('explore/person')
      }}
      options={{
        ...options
      }} />
      <Stack.Screen name='explore/person' options={{
        ...options
      }} component={DiscoveredPersonScreen} />
      <Stack.Screen name='explore/none-left' options={{
        ...options
      }} component={NothingLeftScreen} />
    </Stack.Navigator>
  );
}
