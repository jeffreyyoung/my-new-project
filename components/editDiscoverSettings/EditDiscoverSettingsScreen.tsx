import * as React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions, Button, Text, Switch, Slider } from 'react-native';
import { Header } from '../shared/Header';
import { theme } from '../shared/Theme';
let photos = [];
let i = 0;
while(i < 6) {photos.push(i++)}


function Row({renderLeft, renderRight}) {
    return <View style={{
        flex: 0,
        padding: 15,
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'}}>
        {renderLeft()}
        {renderRight()}
    </View>
}

export function EditDiscoverSettingsScreen() {
    return (
      <View style={{position: 'relative'}}>
        <ScrollView>
          <SafeAreaView style={{width: Dimensions.get('screen').width}}>
            <View style={{paddingHorizontal: 15}}>
                <Header>Discover Settings</Header>            
            </View>

            <Text style={{padding: 15}}>Show me</Text>
            <Row
                renderLeft={() => <Text>Ages between</Text>}
                renderRight={() => <View style={{width: 150}}>
                    <Slider minimumValue={0} maximumValue={100}/>
                </View>}
            />
            <Row
                renderLeft={() => <Text>Male</Text>}
                renderRight={() => <Switch />}
            />
                        <Row
                renderLeft={() => <Text>Female</Text>}
                renderRight={() => <Switch />}
            />

            <View style={{height: 50, width: 50}}></View>

            <Text style={{padding: 15}}>Take a break</Text>
            <Row
                renderLeft={() => <View>
                    <Text>Turn off discover</Text>
                </View>}
                renderRight={() => <Switch />}
            />
            <Text style={{paddingHorizontal: 15, paddingTop: 7.5}}>After turning of discover you can still message your matches, but you will no longer show up in discover.</Text>
            <View style={{height: 150, width: 50}}></View>
            <View style={{paddingTop: 50, paddingBottom: 50}}>
                <Button onPress={() => {}} color={theme.primaryColor} title="Logout"></Button>
                <Button onPress={() => {}} color="red" title="Delete Account"></Button>
            </View>
            
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
