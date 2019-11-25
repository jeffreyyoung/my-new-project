const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PersonProfile, NoThanksButton } from './../discover/PersonProfile';
import { CircleIconButton } from './../shared/Button';
import { Header} from './../shared/Header';
import { theme } from '../shared/Theme';
import { SendLikeModalContent } from '../discover/SendLikeModalContent';
import { Feather } from '@expo/vector-icons';
import { PaddedReportButton } from '../discover/DiscoverScreen';
let counter = 0;
function navigate(navigation) {
    counter++;
    if (counter % 4 === 0) {
      if (counter === 4 * 10) {
        navigation.replace('likes-me/none-left')
      } else {
        navigation.replace('likes-me/loading', {
          afterTwoSeconds: ({navigation}) => navigation.replace('likes-me/person')
        })
      }

    } else {
      navigation.replace('likes-me/person');
    }
  }


function onLike(navigation) {
    navigation.navigate('Modal', {
      Content: ({pop}) => (<SendLikeModalContent
        SubjectContent={() => <SentLike />}
        sendText={'Send and match with Jonathan'}
        pop={pop}
        onSuccess={() => navigate(navigation)}/>)
    })
}


function SentLike({onPress }: {onPress?: any}) {
    return           <View style={{position: 'relative', backgroundColor: 'white', justifyContent: 'flex-end', marginTop: 15, borderRadius: 25, padding: 30}}>
    <Text style={{fontSize: 16, marginBottom: 15}}>Jonathan said...</Text>
    <View style={{padding: 15, backgroundColor: '#ddd', borderRadius: 30}}>
      <Text>Omg your response to belive it or not is so funny! 🤣</Text>
    </View>
    {onPress && <View style={{paddingTop: 15}}>
      <Button onPress={onPress} color={theme.primaryColor} title='Reply' />
    </View>}
  </View>;
}

export function PersonThatLikedMeScreen({navigation}) {
    let like = () => onLike(navigation);
    let next = () => navigate(navigation);

  return (
    <SafeAreaView style={{position: 'relative'}}>
      <ScrollView>
        
          <View style={{paddingHorizontal: 15}}>
            <Header>Liked Me</Header>
            
          <SentLike onPress={like} />

          </View>
          
          <PersonProfile onLike={like} onNoThanks={next} />
            <PaddedReportButton name="Jonathan" onPress={() => {}}/>
      </ScrollView>
      <View style={{position: "absolute", bottom: 30, left: 30}}>
        <NoThanksButton onPress={next}/>
      </View>
      </SafeAreaView>
  );
}
