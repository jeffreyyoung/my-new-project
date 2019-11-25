const uri1 = 'https://images.unsplash.com/photo-1570655569079-d3fa2df6292d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { DiscoverScreen } from './../discover/DiscoverScreen';
import { LikesMeScreen } from './../likesMe/LikesMeScreen';
import { MessagesScreen } from './../messages/MessagesScreen';
import { MoreScreen } from './../more/MoreScreen';
import BottomSheet from 'reanimated-bottom-sheet'
import { CommunityRow, AddCommunityRow } from './../shared/CommunityRow';
import { theme } from './../shared/Theme';
const Tab = createBottomTabNavigator();


export function HomeScreen({ navigation }) {
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
        style:{
            borderTopWidth: 0
        },
      activeTintColor: theme.primaryColor,
      inactiveTintColor: 'gray'
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




const IMAGE_SIZE = 200

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
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
  }
});