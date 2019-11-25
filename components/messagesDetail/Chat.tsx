import React from 'react';
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat'
import { KeyboardAvoidingView, Platform, View, SafeAreaView, Button } from 'react-native';
import { theme } from '../shared/Theme';

export class Chat extends React.Component<any, {messages: any[]}> {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderBubble(props) {
    return (<Bubble {...props} wrapperStyle={{
      right: {
        backgroundColor: theme.primaryColor
      }
    } as any} />)
  }

  renderSend(props) {
    return <Button {...props} title="Send" color={theme.primaryColor} />
  }

  renderToolbar(props) {
    return <InputToolbar {...props} renderSend={this.renderSend} />
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
      <GiftedChat
        renderBubble={this.renderBubble}
        renderInputToolbar={this.renderToolbar}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {
        Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
      }
      </View>
    )
  }
}