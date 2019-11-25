import * as React from 'react';
import { View, SafeAreaView, ScrollView, Image, Button, Dimensions, ActivityIndicator, Keyboard } from 'react-native';
import { theme } from '../shared/Theme';

export function LoadingPersonScreen({ navigation, route }) {
    React.useEffect(() => {
      setTimeout(() => {
          const {afterTwoSeconds} = route.params;
          afterTwoSeconds({navigation,route})
      }, 2000)
    }, [])
    return <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color={theme.primaryColor} />
      </View>
  
    </SafeAreaView>
  }