import React from 'react';
import { View, Dimensions, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CelebrationLottie } from './CelebrationLottie';
export const SnedLikeModalContent = ({ pop, onSucces }) => {

    const [showAnimation, setShowAnimation] = React.useState(false);
    const [message, setMessage] = React.useState('');
    return (
    <View style={{ flex: 1, position: 'relative'}}>
    <View style={{ flex: 1,  justifyContent: 'space-between' }}>
      <View></View>
      <View style={{ flex: 0, width: Dimensions.get('screen').width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder='Write something thoughtful!'
          value={message}
          onChangeText={setMessage}
          style={{
            maxHeight: 45,
            alignSelf: 'stretch',
            padding: 15,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 15,
          }}
        />
        <Button title="Send Like"
          color="tomato"
          onPress={() => {
            setShowAnimation(true);
          }}></Button>
      </View>
      <Button color='black' title='Cancel' onPress={() => {
        pop();
      }} />
    </View>

    {showAnimation && <CelebrationLottie onDone={() => {
        pop();
        setTimeout(() => {
          onSucces();
        }, 100)
      }}/>}
    
    </View>);
}