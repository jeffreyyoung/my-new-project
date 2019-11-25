const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets, StackNavigationProp } from '@react-navigation/stack';
import { LoginScreen } from './components/login/LoginScreen';
import { MessagesDetailScreen } from './components/messagesDetail/MessagesDetailScreen';
import { ViewEditProfileScreen } from './components/viewEditProfile/ViewEditProfileScreen';
import { EditDiscoverSettingsScreen } from './components/editDiscoverSettings/EditDiscoverSettingsScreen';
import { CommunityDetailScreen } from './components/communityDetail/CommunityDetailScreen';
import { CommunityRow, AddCommunityRow } from './components/shared/CommunityRow';
import { ExploreCommunitiesScreen } from './components/exploreCommunities/ExploreCommunitiesScreen';
import { ModalScreen } from './components/modal/ModalScreen';
import { theme } from './components/shared/Theme';
import { HomeScreen } from './components/home/HomeScreen';

export type RootParamList = {
  Home: undefined
  Login: undefined
  LikeModal: undefined
  NoThanksModal: undefined
  ViewEditProfile: undefined,
  CommunityDetail: undefined,
  ExploreCommunities: undefined,
  EditDiscoverSettings: undefined,
  Modal: {
    renderContent: () => React.ReactElement
  }
  MessagesDetail: {
    userName: string,
  }
};

type RouteName = keyof RootParamList

const Stack = createStackNavigator<RootParamList>();

const Tab = createBottomTabNavigator();
export default function App() {

  const bottomSheetRef = React.useRef();

  return (
    <View style={{ flex: 1 }}>
      <NavigationNativeContainer>

        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'black',
            // headerBackTitleStyle: {
            //   color: theme.primaryColor
            // },
          }}
        >
          <Stack.Screen name='Home' options={{
            headerShown: false
          }} component={HomeScreen} />
          <Stack.Screen name='Modal'
          options={{
            headerShown: false,
            cardOverlayEnabled: false,

            cardStyle: {
              backgroundColor: ' rgba(255, 255, 255, 1)'
            },
            ...TransitionPresets.ModalTransition
          }} component={ModalScreen} />
          <Stack.Screen
            name='ExploreCommunities'
            component={ExploreCommunitiesScreen}
            options={{
              title: '',
              cardStyle: {
                backgroundColor: ' rgba(255, 255, 255, 1)'
              }
            }}
          />
          <Stack.Screen name='CommunityDetail' options={{
            headerShown: false
          }} component={CommunityDetailScreen} />
          <Stack.Screen
            name='MessagesDetail'
            component={MessagesDetailScreen}
            options={{
              title: 'Chat',
              headerStyle: {
                shadowColor: 'transparent'
              }
            }}
          />
          <Stack.Screen
            name='EditDiscoverSettings'
            options={{
              title: 'Settings'
            }}
            component={EditDiscoverSettingsScreen}
          />
          <Stack.Screen name='ViewEditProfile' options={{title: 'Jonathan', headerStyle: {shadowColor: 'transparent'}}} component={ViewEditProfileScreen} />
          <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name='LikeModal'
            component={() => <View><Text>Sending Match</Text></View>}
          />
          <Stack.Screen name='NoThanksModal'
            component={() => <View>Sending No Thanks</View>}
          />
        </Stack.Navigator>
      </NavigationNativeContainer>
    </View>
  );
}


