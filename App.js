import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Switch,
  Button,
  TouchableOpacity,
  PropTypes,
  AppRegistry
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage, Send, InputToolbar, Menu, Composer, ScrollingButtonMenu, ScrollCategories, ScrollCatalog} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import NavBar from './Navbar';
import CustomMenu from './CustomMenu';
import { StackNavigator } from 'react-navigation';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


let menus1 = [
    {
       text:'Cari produk',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cari inspirasi',
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

let menus2 = [
    {
       text:'Pesta malam',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pesta siang',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Interview kerja',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Dinner date',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus3 = [
    {
       text:'Ayah',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Ibu',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pasangan',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Teman',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let categories1 = [
    {
       url:require('./shared/static/kado.png'),
       text: 'Avatar',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/kado.png'),
       text: 'Inspirasi kado',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/event.png'),
       text: 'Produk berdasarkan event',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/new.png'),
       text: 'Produk terbaru',
       borderColor: '#327cce'
    },
];

let catalog1 = [
        {
            title: 'Dress Panjang Hijau Wanita',
            subtitle: 'Rp. 500.000',
            illustration: require('./shared/static/Dress.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Midi Krem Wanita',
            subtitle: 'Rp. 400.000',
            illustration: require('./shared/static/Gold.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Mini Periwinkle Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Periwinkle.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Silver Pesta Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Silver.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Midi Lace Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Lace.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Midi Biru Wanita',
            subtitle: 'Rp. 300.000',
            illustration: require('./shared/static/BIrumidi.png'),
            rating: require('./shared/static/five-stars.png'),
        },
        {
            title: 'Dress Mini Berry Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Berry.png'),
            rating: require('./shared/static/five-stars.png'),
        },
      ];

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typingText: null,
      isLoadingEarlier: false,
      placeholder: 'Ketik namamu disini',
      isQuickReply: false,
      isCategories: false,
      isCatalog: false,
      slider1ActiveSlide: 0,
      items: [
        {
           text:'Contoh 1',
           textColor:'#eba43b',
           backgroundColor:'#FFFFFF',
           borderColor:'#eba43b',
        },
      ],
      items2: [
        {
           url:"./shared/static/coba.png",
           text: 'coba'
        },
      ],
      entries: [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth, Germany',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }
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
    this.renderCategories = this.renderCategories.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderSend = this.renderSend.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderCatalog = this.renderCatalog.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.onPressButtonMenu = this.onPressButtonMenu.bind(this);
    this._isAlright = null;
    this.renderQuickReply = this.renderQuickReply.bind(this);
    this.onQuickReply = this.onQuickReply.bind(this);
    this.onCategories = this.onCategories.bind(this);
    this.onCatalog = this.onCatalog.bind(this);
    this.onPressCategories = this.onPressCategories.bind(this);
    this.onPressCatalog = this.onPressCatalog.bind(this);
  }

  static navigationOptions = {
      header: null
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
          this.onReceive('Kalau Kakak masih bingung, Dian bisa bantuin buat cariin inspirasi. Contohnya kayak inspirasi buat beli kado, rekomendasi produk kekinian, atau bahkan pakaian buat pesta.');
          this.onReceive2('Ketik pencarian produk disini');
          this.onQuickReply(true, menus1);
          this.onCategories(false, categories1);
          this.onCatalog(true, catalog1);
          } else if (messages[0].text == 'Cari inspirasi') {
          this.onReceive('Kakak lagi cari inspirasi untuk apa nih?');
          this.onReceive2('Ketik pencarian inspirasi disini');
          this.onQuickReply(false, menus1);
          this.onCategories(true, categories1);
          this.onCatalog(false, catalog1);
          } else if (messages[0].text == 'Inspirasi hadiah') {
          this.onReceive('Kamu mau cari hadiah buat siapa nih? Buat pasangan? Ibu? Ayah? Saudara? Atau teman?');
          this.onQuickReply(true, menus3);
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onCatalog(false, catalog1);
          } else if (messages[0].text == 'Pesta malam') {
          this.onReceive('Oke deh! ini inspirasi pakaian dan aksesoris buat Kakak yang pengen tampil oke di pesta malam apapun! Ada lagi yang bisa Dian cariin?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(false, menus1);
          this.onCatalog(true, catalog1);
          } else if (messages[0].text == 'Produk berdasarkan event') {
          this.onReceive('Event apanih yang mau Kakak datengin? Dian bisa bantu cariin buat banyak event loh, mulai dari pesta pernikahan sampai interview kerja.');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus2);
          this.onCatalog(false, catalog1);
          this.onReceive2('Ketik event lain disini');
          } else if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Mohon maaf, Dian ga paham maksud Kakak. Saat ini Dian masih dalam pengembangan, mohon berikan kritik dan saran untuk Dian ya.');
              this.onReceive2('Ketik teks disini');
              this.onQuickReply(false, menus1);
              this.onCategories(false, categories1);
              this.onCatalog(false, catalog1);
            
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

  onCategories(bool, array) {
    this.setState((previousState) => {
      return {
        isCategories: bool,
        items2: array,
      };
    });
  }

  onCatalog(bool, array) {
    this.setState((previousState) => {
      return {
        isCatalog: bool,
        entries: array,
      };
    });
  }

  onPressButtonMenu(menu) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: menu.text,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onQuickReply(false, []),
    this.onSend(messages);
  }

  onPressCategories(menu) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: menu.text,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
  }

  onPressCatalog(text2) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
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

  renderCategories(props) {
    return (
      <ScrollCategories
        {...props}
        style={{paddingBottom:9, paddingLeft: 8}}
        onPress={this.onPressCategories.bind(this)}
      />
    );
  }

  renderCatalog(props) {
    return (
      <ScrollCatalog
        {...props}
        style={{paddingBottom:86, paddingLeft: 20}}
        onPress={this.onPressCatalog.bind(this)}
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
    return (
    <InputToolbar {...props} containerStyle={{borderTopWidth: 0}} />
    );
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
            isCategories={this.state.isCategories}
            isCatalog={this.state.isCatalog}
            slider1ActiveSlide={this.state.slider1ActiveSlide}
            items={this.state.items}
            items2={this.state.items2}
            entries={this.state.entries}
            onReceive2={this.onReceive2}
            onReceive3={this.onReceive2}
            onQuickReply={this.onQuickReply}
            onCategories={this.onCategories}
            onCatalog={this.onCatalog}
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
            renderCategories={this.renderCategories}
            renderCatalog={this.renderCatalog}
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
    backgroundColor: '#327cce'
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


class Product extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Product Screen</Text>
      </View>
    );
  }
}

class Payment extends React.Component {
  state = {
      detail: false};

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);

     static navigationOptions = {
        title: 'Pembayaran',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center', color:'#fff'},
        headerStyle:{
            backgroundColor:'#327cce',
        },
        headerLeft: (
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Batal"
            color="#fff"
          />
        ),
    };

  render() {

    const detailHarga = this.state.detail ? (
    <View style={s.detail}>
      <Text style={{marginLeft: 15, marginTop: 11,fontSize: 13}}>Dress: Rp 600.000</Text>
      <Text style={{marginLeft: 15, marginTop: 2,fontSize: 13}}>Ongkir: Rp 11.000</Text>
    </View>
      ) : false;

    return (
    <SafeAreaView style={s.container}>
      <View style={s.harga}>
      <Text style={{marginLeft: 15, marginTop: 11,fontSize: 12}}>Total Tagihan:</Text>
      <Text style={{marginLeft: 15, marginTop: 2,fontSize: 18, fontWeight: 'bold'}}>Rp 611.000</Text>

      </View>
      {detailHarga}
      <View style={s.space}>
      </View>
            <CreditCardInput

              style={{marginTop:20}}
              autoFocus

              requiresName
              requiresCVC

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          <TouchableOpacity
          style={s.loginScreenButton}
          onPress={() => this.props.navigation.navigate('MyModal')}
          underlayColor='#fff'>
          <Text style={s.loginText}>Bayar</Text>
          </TouchableOpacity>
          
    </SafeAreaView>
    );
  }
}

class ModalScreen extends React.Component {
 state = {
      detail: false};

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);

     static navigationOptions = {
        title: 'Pembayaran',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center', color:'#fff'},
        headerStyle:{
            backgroundColor:'#327cce',
        },
        headerLeft: (
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Batal"
            color="#fff"
          />
        ),
    };

  render() {

    const detailHarga = this.state.detail ? (
    <View style={s.detail}>
      <Text style={{marginLeft: 15, marginTop: 11,fontSize: 13}}>Dress: Rp 600.000</Text>
      <Text style={{marginLeft: 15, marginTop: 2,fontSize: 13}}>Ongkir: Rp 11.000</Text>
    </View>
      ) : false;

    return (
    <SafeAreaView style={s.container}>
      <View style={s.harga}>
      <Text style={{marginLeft: 15, marginTop: 11,fontSize: 12}}>Total Tagihan:</Text>
      <Text style={{marginLeft: 15, marginTop: 2,fontSize: 18, fontWeight: 'bold'}}>Rp 611.000</Text>

      </View>
      {detailHarga}
      <View style={s.space}>
      </View>
            <CreditCardInput

              style={{marginTop:20}}
              autoFocus

              requiresName
              requiresCVC

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          <TouchableOpacity
          style={s.loginScreenButton}
          onPress={() => this.props.navigation.goBack()}
          underlayColor='#fff'>
          <Text style={s.loginText}>Bayar</Text>
          </TouchableOpacity>
          
    </SafeAreaView>
    );
  }
}


const s = StyleSheet.create({
  harga: {
    backgroundColor: "#Fff",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginRight: 20,
    height: 60,
  },
  detail: {
    backgroundColor: "#Fff",
    height: 60,
    borderTopWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
  space:
  {
    height:20,
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    marginTop: 0,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  loginScreenButton:{
    marginRight:0,
    width:375,
    height: 50,
    marginLeft:0,
    marginTop:639,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#eba43b',
    borderWidth: 1,
    borderColor: '#eba43b',
    position: 'absolute',
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      marginTop: 3,
      fontSize: 16,
      fontWeight: 'bold'
  }
});


const navbarPayment = StyleSheet.create({
  
  statusBar: {
    backgroundColor: '#327cce',
    height: 0,
  },
  navBar: {
    backgroundColor: '#327cce',
  },
  title: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'rgba(231, 37, 156, 0.5)',
  },
  navButton: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    width: 30,
  },
})

const MainStack = StackNavigator(
  {
    Home: {
      screen: Example,
    },
    Product: {
      screen: Product,
    },
    Payment: {
      screen: Payment,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('App', () => RootStack);

