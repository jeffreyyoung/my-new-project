const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator, TransitionPresets, StackNavigationProp } from '@react-navigation/stack';
import { DiscoverScreen } from './components/discover/DiscoverScreen';
import { LikesMeScreen } from './components/likesMe/LikesMeScreen';
import { MessagesScreen } from './components/messages/MessagesScreen';
import { MoreScreen } from './components/more/MoreScreen';
import { LoginScreen } from './components/login/LoginScreen';
import { MessagesDetailScreen } from './components/messagesDetail/MessagesDetailScreen';

function HomeScreen() {
  return (<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const icons = {
          "Discover": 'users',
          "Likes Me": 'thumbs-up',
          "Messages": "message-circle",
          "More": "user"
        }

        return <Feather name={icons[route.name]} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Likes Me" component={LikesMeScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>);
}


export type RootParamList = {
  Home: undefined
  Login: undefined
  LikeModal: undefined
  NoThanksModal: undefined
  MessagesDetail: undefined
};

type RouteName = keyof RootParamList

const Stack = createStackNavigator<RootParamList>();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        
        <Stack.Screen name='Home' options={{
          headerShown: false
        }} component={HomeScreen}/>
        <Stack.Screen name='MessagesDetail' component={MessagesDetailScreen} />
        <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen}/>
        <Stack.Screen name='LikeModal'
          component={() => <View><Text>Sending Match</Text></View>}
        />
        <Stack.Screen name='NoThanksModal'
          component={() => <View>Sending No Thanks</View>}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}