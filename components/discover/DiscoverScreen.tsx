const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, Dimensions, ActivityIndicator } from 'react-native';
import { PersonProfile, NoThanksButton } from './PersonProfile';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SquareButton } from '../more/MoreScreen';
import { TextInput } from 'react-native-gesture-handler';
import { LottieAnimationView } from '../shared/LottieAnimationView';
import { CelebrationLottie } from './CelebrationLottie';

const Stack = createStackNavigator();

let counter = 0;



export function DiscoveredPersonScreen({ navigation, ...props }) {

  function onLike() {
    navigation.navigate('Modal', {
      Content: ({ pop }) => {

        const [showAnimation, setShowAnimation] = React.useState(false);
        const [message, setMessage] = React.useState('');
        return (<View style={{ flex: 1, position: 'relative', justifyContent: 'space-between' }}>
          <View></View>
          <View style={{ flex: 0, width: Dimensions.get('screen').width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              placeholder='Write something thoughtful!'
              value={message}
              onChangeText={setMessage}
              style={{
                maxHeight: 45,
                width: Dimensions.get('window').width*2/3,
                alignSelf: 'stretch',
                padding: 15,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
              }}
            />
            <Button title="Send Like"
              onPress={() => {
                setShowAnimation(true);
              }}></Button>
          </View>
          <Button color='black' title='Cancel' onPress={() => {
            pop();
          }} />

          {showAnimation && <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, flex:0, justifyContent: 'center', alignItems: 'center'}}>
            <CelebrationLottie onDone={() => {
            pop();
            setTimeout(() => {
              navigation.replace('explore/person');
            }, 100)
          }}/></View>}
        </View>)
      }
    })
  }

  function navigate() {
    counter++;
    if (counter % 4 === 0) {
      if (counter === 4 * 10) {
        navigation.replace('explore/none-left')
      } else {
        navigation.replace('explore/loading')
      }

    } else {
      navigation.replace('explore/person');
    }
  }
  return (
    <View style={{ position: 'relative' }}>
      <SafeAreaView>
        <ScrollView>
          <PersonProfile onLike={onLike} onNoThanks={navigate} />
          <View style={{ paddingTop: 46, paddingHorizontal: 15, paddingBottom: 45 }}>
            <Button title="Report Jonathan" onPress={() => { }}></Button>

          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{ position: "absolute", bottom: 30, left: 30 }}>
        <NoThanksButton onPress={navigate} />
      </View>
    </View>
  );
}

function LoadingPersonScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('explore/person');
    }, 2000)
  }, [])
  return <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size='large' />
    </View>

  </SafeAreaView>
}

function NoOneLeftScreen({ navigation }) {

  return <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25 }}>That's all for now 😄</Text>
      <Text style={{ fontSize: 18 }}>Come back later to discover more people :D</Text>
    </View>

  </SafeAreaView>
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
      <Stack.Screen name='explore/loading' component={LoadingPersonScreen} options={{
        ...options
      }} />
      <Stack.Screen name='explore/person' options={{
        ...options
      }} component={DiscoveredPersonScreen} />
      <Stack.Screen name='explore/none-left' options={{
        ...options
      }} component={NoOneLeftScreen} />
    </Stack.Navigator>
  );
}
