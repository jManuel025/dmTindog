// GiftedChatWithChatkit/MyChat.js
import React, {Component} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/efc4207e-6a49-4d94-99f4-105183a31929/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:efc4207e-6a49-4d94-99f4-105183a31929';
const CHATKIT_ROOM_ID = 'cbda4129-9988-4b74-aeee-8884f8a43824';
const CHATKIT_USER_NAME = 'Manuel';

export default class mensajes extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider,
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: message => alert(message.text),
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <GiftedChat messages={this.state.messages} />;
  }
}