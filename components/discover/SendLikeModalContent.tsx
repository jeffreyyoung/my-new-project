import React from 'react';
import { View, Dimensions, Button, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CelebrationLottie } from './CelebrationLottie';
import { theme } from '../shared/Theme';
import { SquareButton } from '../more/MoreScreen';
export const SendLikeModalContent = ({ SubjectContent, pop, onSuccess, sendText = 'Send Like' }) => {

    const [showAnimation, setShowAnimation] = React.useState(false);
    const [message, setMessage] = React.useState('');
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView>
            <View style={{
                    flex: 1,
                    padding: 15,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <SubjectContent />
                <TextInput
                    autoFocus={true}
                    placeholder='Write something thoughtful!'
                    value={message}
                    onChangeText={setMessage}
                    style={{
                        marginTop: 15,
                        backgroundColor: '#F5F5F5',
                        padding: 15,
                        width: Dimensions.get('screen').width*3/4,
                        borderWidth: 1,
                        borderColor: '#F5F5F5',
                        marginBottom: 15,
                        borderRadius: 15,
                    }}
                />
                
                <SquareButton
                    text={sendText}
                    textColor='white'
                    backgroundColor={theme.primaryColor}
                    onPress={() => {
                        Keyboard.dismiss();
                        setTimeout(() => {
                            setShowAnimation(true);
                        }, 200);
                        
                    }}></SquareButton>
                <View style={{height: 30}} />
                <Button color='black' title='Cancel' onPress={() => {
                    pop();
                }} />
                
            </View>
            </ScrollView>
            <KeyboardAvoidingView behavior="padding" />
            {showAnimation && <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, flex: 0, alignItems: 'center', justifyContent: 'center'}}><CelebrationLottie onDone={() => {
                pop();
                setTimeout(() => {
                    onSuccess();
                }, 100);
            }} /></View>}

        </View>);
}