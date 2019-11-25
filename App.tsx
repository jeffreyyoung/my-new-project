const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
import { ViewEditProfileScreen } from './components/viewEditProfile/ViewEditProfileScreen';
import { EditDiscoverSettingsScreen } from './components/editDiscoverSettings/EditDiscoverSettingsScreen';
import { CommunityDetailScreen } from './components/communityDetail/CommunityDetailScreen';
import BottomSheet from 'reanimated-bottom-sheet'
import { CommunityRow, AddCommunityRow } from './components/shared/CommunityRow';
import { ExploreCommunitiesScreen } from './components/exploreCommunities/ExploreCommunitiesScreen';

function HomeScreen({ navigation }) {
  const bottomSheetRef = React.useRef();
  return (<View style={{ flex: 1 }}><Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const icons = {
          "Discover": 'users',
          "Liked Me": 'thumbs-up',
          "Messages": "message-circle",
          "More": "user"
        }

        return <Feather name={icons[route.name]} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Liked Me" component={LikesMeScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    <Tab.Screen name="More" component={(props) => <MoreScreen {...props} showCommunitySwitcher={() => (bottomSheetRef as any).current.snapTo(1)} />} />
  </Tab.Navigator>
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[0, '50%', '75%']}
      renderContent={() => <View style={{
        paddingVertical: 15,
        height: '100%',
        backgroundColor: 'white',
      }}>
        <CommunityRow onPress={() => {
          (bottomSheetRef as any).current.snapTo(0)
          navigation.push('CommunityDetail')
        }} />
        <CommunityRow onPress={() => {
          (bottomSheetRef as any).current.snapTo(0)
          navigation.push('CommunityDetail')
        }} />
        <AddCommunityRow onPress={() => {
          (bottomSheetRef as any).current.snapTo(0)
          navigation.push('ExploreCommunities')
        }} />
      </View>}
      renderHeader={() => <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>}
    />

  </View>);
}

export type RootParamList = {
  Home: undefined
  Login: undefined
  LikeModal: undefined
  NoThanksModal: undefined
  ViewEditProfile: undefined,
  CommunityDetail: undefined,
  ExploreCommunities: undefined,
  EditDiscoverSettings: undefined,
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
          }}
        >

          <Stack.Screen
            name='ExploreCommunities'
            component={ExploreCommunitiesScreen}
          />


          <Stack.Screen name='Home' options={{
            headerShown: false
          }} component={HomeScreen} />
          <Stack.Screen name='CommunityDetail' options={{
            headerShown: false
          }} component={CommunityDetailScreen} />
          <Stack.Screen
            name='MessagesDetail'
            component={MessagesDetailScreen}
          />
          <Stack.Screen
            name='EditDiscoverSettings'
            component={EditDiscoverSettingsScreen}
          />
          <Stack.Screen name='ViewEditProfile' component={ViewEditProfileScreen} />
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



const IMAGE_SIZE = 200

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});