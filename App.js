/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

/*import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import messagesData from './data';
import NavBar from './Navbar';
import CustomView from './CustomView';
import CustomActions from './CustomActions';


const styles = StyleSheet.create({
  container: { flex: 1 },
});

const filterBotMessages = (message) => !message.system && message.user && message.user._id && message.user._id === 2;
const findStep = (step) => (_, index) => index === step - 1;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      step: 0,
    };

    this.onSend = this.onSend.bind(this);
    this.parsePatterns = this.parsePatterns.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    
  }

  componentWillMount() {
    // init with only system messages
    this.setState({ messages: messagesData.filter((message) => message.system) });
  }

  onSend(messages = []) {
    const step = this.state.step + 1;
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
      step,
    }));
    setTimeout(() => this.botSend(step), 1500 + Math.round(Math.random() * 1000));
  }

  botSend(step = 0) {
    const newMessage = messagesData
      .reverse()
      .filter(filterBotMessages)
      .find(findStep(step));
    if (newMessage) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, newMessage),
      }));
    }
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: 'orange' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ];
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <NavBar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          renderActions={this.renderCustomActions}
          renderCustomView={CustomView}
          user={{
            _id: 1,
          }}
          parsePatterns={this.parsePatterns}
          renderFooter={this.renderFooter}
        />
      </SafeAreaView>
    );
  }

}*/
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage, Send, InputToolbar, Menu, Composer, ScrollingButtonMenu} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import NavBar from './Navbar';
import CustomMenu from './CustomMenu';

let menus1 = [
    {
       text:'Cari Produk',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cari Inspirasi',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Rekomendasi',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Promo',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
 
];

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typingText: null,
      isLoadingEarlier: false,
      placeholder: 'Ketik namamu disini',
      isQuickReply: false,
      items: [
    {
       text:'Contoh 1',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cari Inspirasi',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Rekomendasi',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Promo',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
 
],
    };


    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.onReceive2 = this.onReceive2.bind(this);
    this.onReceive3 = this.onReceive2.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderComposer = this.renderComposer.bind(this);
    this.renderCustomMenu = this.renderCustomMenu.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderSend = this.renderSend.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.onPressButtonMenu = this.onPressButtonMenu.bind(this);
    this._isAlright = null;
    this.renderQuickReply = this.renderQuickReply.bind(this);
    this.onQuickReply = this.onQuickReply.bind(this);
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright || this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Dian sedang mengetik...'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else if (messages[0].text == 'Catherine') {
          this.onReceive('Hai, Kak Catherine! Mau cari produk apa nih?');
          this.onReceive3('Dian sedang mengetik...')
          this.onReceive('Kalau Kakak masih bingung, Dian bisa bantuin buat cariin inspirasi. Contohnya kayak inspirasi buat beli kado, rekomendasi produk kekinian, atau bahkan pakaian buat pesta.');
          this.onReceive2('Ketik pencarian produk disini');
          this.onQuickReply(true, menus1);
          } else if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Mohon maaf, Dian ga paham maksud Kakak. Saat ini Dian masih dalam pengembangan, mohon berikan kritik dan saran untuk Dian ya.');
              this.onReceive2('Ketik teks disini')
            
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Dian',
            //avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),     
      };
    });
  }

  onReceive2(text) {
    this.setState((previousState) => {
      return {
        placeholder: text,
      };
    });
  }

  onReceive3(text) {
    this.setState((previousState) => {
      return {
        typingText: text,
      };
    });
  }

  onQuickReply(bool, array) {
    this.setState((previousState) => {
      return {
        isQuickReply: bool,
        items: array,
      };
    });
  }

  onPressButtonMenu(menu) {
    console.log(menu.text);
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderCustomMenu(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomMenu
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Menu
        {...props}
        options={options}
      />
    );
  }

  renderComposer(props){ 
    return ( 
      <Composer
      {...props}
      placeholderTextColor={'#eba43b'}
      />
    );
  }


  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderQuickReply(props) {
    return (
      <ScrollingButtonMenu
        {...props}
        style={{paddingBottom:9, paddingLeft: 8}}
        onPress={this.onPressButtonMenu.bind(this)}
      />
    );
  }

  renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View>
                    <Image source={require('./shared/static/ic_send_white_3x.png')} style={{marginTop: 8, marginLeft:-3 , width: 28, height: 28}}/>
                </View>
            </Send>
        );
    }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderInputToolbar (props) {
    return <InputToolbar {...props} containerStyle={{borderTopWidth: 0}} />
  }

  render() {
    return (
      
      <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
        <StatusBar hidden={true} />
        <NavBar />
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            loadEarlier={this.state.loadEarlier}
            placeholder={this.state.placeholder}
            isQuickReply={this.state.isQuickReply}
            items={this.state.items}
            onReceive2={this.onReceive2}
            onReceive3={this.onReceive2}
            onQuickReply={this.onQuickReply}
            onLoadEarlier={this.onLoadEarlier}
            isLoadingEarlier={this.state.isLoadingEarlier}

            user={{
              _id: 1, // sent messages should have same user._id
            }}
            renderActions={this.renderCustomActions}
            renderMenu={this.renderCustomMenu}
            renderBubble={this.renderBubble}
            renderCustomView={this.renderCustomView}
            renderQuickReply={this.renderQuickReply}
            renderComposer={this.renderComposer}
            renderFooter={this.renderFooter}
            renderSend={this.renderSend}
            renderInputToolbar={this.renderInputToolbar} 
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});





