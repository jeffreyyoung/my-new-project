const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Header({children}) {
  return <Text style={{fontSize: 35, fontWeight: 'bold', marginTop: 25}}>{children}</Text>
}

export function LikeButton({onPress}) {
  return <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 100}}>
    <Feather name='thumbs-up' size={30}/>
  </TouchableOpacity>
}

export function NoThanksButton({onPress}) {
  return <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 100}}>
  <Feather name='x' size={30}/>
</TouchableOpacity>
}

export function PositionedLikeButton ({onPress}) {
  return     <View style={{position: 'absolute', bottom: 15, right: 15}}>
    <LikeButton onPress={onPress} />
</View>;
}

export function QuestionCard({onLike, onNoThanks}) {
  return <View style={{position: 'relative', backgroundColor: 'white', justifyContent: 'center', marginTop: 15, borderRadius: 25, padding: 30}}>
    <Text style={{fontSize: 16}}>Do you want to go skiing with Jonathan?</Text>
    <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly'}}>
      <NoThanksButton onPress={onNoThanks}/>
      <LikeButton onPress={onLike}/>
    </View>
  </View>
}

function ImageCard({uri, onLike}: LikeableProps & {uri: string}) {
  return <View style={{position: 'relative'}}>
    <Image source={{uri}} style={{width: '100%', aspectRatio:1, marginTop: 15}} borderRadius={25} />
    <PositionedLikeButton onPress={() => onLike(uri)}/>
  </View>;
}

function ConversationStarterCard({prompt,answer, onLike}) {
  return <View style={{position: 'relative', backgroundColor: 'white', justifyContent: 'center', marginTop: 15, borderRadius: 25, padding: 30}}>
    <Text style={{fontSize: 16}}>{prompt}</Text>
    <Text style={{paddingTop: 30, fontSize: 24, paddingBottom: 50, fontWeight: 'bold', textAlign: 'center'}}>{answer}</Text>
    <PositionedLikeButton onPress={onLike}/>
  </View>
}

function BasicInfoCard(props) {
  return (<View style={{backgroundColor: 'white', justifyContent: 'center', marginTop: 15, borderRadius: 25, padding: 30}}>
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
      <Feather name='calendar' size={16}/>
      <Text style={{fontSize: 16, paddingLeft: 10}}>27 years old</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Feather name='map-pin' size={16}/>
      <Text style={{fontSize: 16, paddingLeft: 10}}>Provo</Text>
    </View>
  </View>)
}

type LikeableProps = {
  onLike: (thing: any) => void
}

type PersonProfileProps = {
  
  onLike: (thing: any) => void,
  onNoThanks: () => void

}
export function PersonProfile(props: PersonProfileProps) {
    return <View style={{paddingHorizontal: 15}}>
    <Header>Jonathan</Header>
    <Text style={{}}>Do you want to go skiing with Jonathan?</Text>
    <ImageCard uri={uri1} onLike={props.onLike}/>
    <ConversationStarterCard onLike={props.onLike} prompt="Believe it or not..." answer="I am missing a toe! 😳" />
    <ImageCard uri={uri1} onLike={props.onLike} />
    <BasicInfoCard />
    <QuestionCard onLike={props.onLike} onNoThanks={props.onNoThanks}/>
    <ConversationStarterCard onLike={props.onLike} prompt="When/Where you can find me skiing..." answer="Alta and Snowbird every Saturday and Sunday... also when I get sick 🤫" />
    <ImageCard uri={uri1} onLike={props.onLike} />
    <ConversationStarterCard onLike={props.onLike} prompt="My worst skiing accident..." answer="Let's just say that's why I'm missing a toe." />
    <View></View>
  </View>;
}
