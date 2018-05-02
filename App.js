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
  TouchableOpacity,
  PropTypes,
  AppRegistry,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import Expo from 'expo';
import {GiftedChat, Actions, Bubble, SystemMessage, Send, InputToolbar, Menu, Composer, ScrollingButtonMenu, ScrollCategories, ScrollCatalog, PayButton, YellowBox, PersistentMenu} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import NavBar, { NavTitle, NavButton, NavButtonText } from 'react-native-nav';
import CustomMenu from './CustomMenu';
import { StackNavigator } from 'react-navigation';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Container, Content, Button, Left, Right, Icon, Picker, Item, Grid, Col, Toast, Text as NBText } from 'native-base';
import {default as ProductComponent} from './Product';
import ImageSlider from 'react-native-image-slider';
import Carousel, { Pagination } from 'react-native-snap-carousel';

console.disableYellowBox = true;

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

let menus4 = [
    {
       text:'Pria',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Wanita',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];


let menus5 = [
    {
       text:'Aksesoris',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pakaian',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Sepatu',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Seluruh outfit',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus6 = [
    {
       text:'⭐',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'⭐⭐',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'⭐⭐⭐',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'⭐⭐⭐⭐',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
        {
       text:'⭐⭐⭐⭐⭐',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus7 = [
    {
       text:'Lihat produk selanjutnya',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cari produk lain',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus8 = [
    {
       text:'Size chart',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'XS',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'S',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'M',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'L',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'XL',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus9 = [
    {
       text:'XS',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'S',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'M',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'L',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'XL',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus10 = [
    {
       text:'Cari produk lain',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Check out',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus11 = [
    {
       text:'Benar',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Ganti',
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

let categories2 = [
    {
       url:require('./shared/static/kado.png'),
       text: 'Avatar',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/pakaianwanita.png'),
       text: 'Pakaian wanita',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/pakaianpria.png'),
       text: 'Pakaian pria',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/beauty.png'),
       text: 'Kecantikan',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/elektronik.png'),
       text: 'Elektronik',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/dapur.png'),
       text: 'Peralatan dapur',
       borderColor: '#327cce'
    },
];

let categories3 = [
    {
       url:require('./shared/static/kado.png'),
       text: 'Avatar',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/blouse.png'),
       text: 'Blouse wanita',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/gaun.png'),
       text: 'Gaun wanita',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/rok.png'),
       text: 'Rok wanita',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/aksesoriswanita.png'),
       text: 'Aksesoris wanita',
       borderColor: '#327cce'
    },
];

let catalog1 = [
        {
            title: 'Dress Panjang Hijau Wanita',
            subtitle: 'Rp. 600.000',
            illustration: require('./shared/static/Dress.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Midi Krem Wanita',
            subtitle: 'Rp. 400.000',
            illustration: require('./shared/static/Gold.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Mini Periwinkle Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Periwinkle.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Silver Pesta Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Silver.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Midi Lace Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Lace.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Midi Biru Wanita',
            subtitle: 'Rp. 300.000',
            illustration: require('./shared/static/BIrumidi.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
        },
        {
            title: 'Dress Mini Berry Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Berry.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
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
      isMenu: false,
      isCategories: false,
      isPayment: false,
      isCatalog: false,
      slider1ActiveSlide: 0,
      modalVisible: false,
      modal2Visible: false,
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
      isReady:false,
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
            title: '',
            subtitle: '',
            illustration: ''
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
    this.renderCategories = this.renderCategories.bind(this);
    this.renderPayButton = this.renderPayButton.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderSend = this.renderSend.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderCatalog = this.renderCatalog.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.onPressButtonMenu = this.onPressButtonMenu.bind(this);
    this.onPressPersistentMenu = this.onPressPersistentMenu.bind(this);
    this.onPressMenu = this.onPressMenu.bind(this);
    this._isAlright = null;
    this.renderQuickReply = this.renderQuickReply.bind(this);
    this.renderPersistentMenu = this.renderPersistentMenu.bind(this);
    this.onQuickReply = this.onQuickReply.bind(this);
    this.onMenu = this.onMenu.bind(this);
    this.onCategories = this.onCategories.bind(this);
    this.onPayment = this.onPayment.bind(this);
    this.onCatalog = this.onCatalog.bind(this);
    this.onPressCategories = this.onPressCategories.bind(this);
    this.onPressPayButton = this.onPressPayButton.bind(this);
    this.onPressCatalog = this.onPressCatalog.bind(this);
    this.onPressProductDetail = this.onPressProductDetail.bind(this);
    this.onPressWishlist = this.onPressWishlist.bind(this);
    this.onTriggerMessage = this.onTriggerMessage.bind(this);
  }

  static navigationOptions = {
      header: null
  }

  async componentWillMount() {
    this.setState({product: dummyProduct});
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
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

  componentDidMount() {
    /* Select the default color and size (first ones) */
    let defColor = this.state.product.colors[0];
    let defSize = this.state.product.sizes[0];
    this.setState({
      selectedColor: defColor,
      selectedSize: defSize
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

   setModal2Visible(visible) {
    this.setState({modal2Visible: visible});
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
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Cari inspirasi') {
          this.onReceive('Kakak lagi cari inspirasi untuk apa nih?');
          this.onReceive2('Ketik pencarian inspirasi disini');
          this.onQuickReply(false, menus1);
          this.onCategories(true, categories1);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Inspirasi hadiah') {
          this.onReceive('Kamu mau cari hadiah buat siapa nih? Buat pasangan? Ibu? Ayah? Saudara? Atau teman?');
          this.onQuickReply(true, menus3);
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Pesta malam') {
          this.onReceive('Oke Kak! Kakak mau cari inspirasinya untuk pakaian wanita atau pria?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus4);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Wanita') {
          this.onReceive('Oke... Kakak mau cari apa nih? Aksesoris, pakaian, sepatu, atau seluruh outfit untuk pesta?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus5);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Favorit Dress Midi Biru Wanita') {
          this.onReceive('Dress Midi Biru Wanita berhasil ditambahkan ke wishlist Kakak.');
          this.onReceive('Untuk produk-produk di wishlist Kakak, Kak Catherine bisa klik menu di sebelah kiri bawah layar. Jangan cuma ditaruh di wishlist aja kak, nanti kehabisan loh, produknya laku nih soalnya!');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(false, menus5);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Beri rating dan ulasan') {
          this.onReceive('Menurut Kakak berapa rating untuk produk Dress Panjang Hijau Wanita?');
          this.onReceive2('Ketik rating disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus6);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Pakaian') {
          this.onReceive('Oke deh! Ini inspirasi pakaian dan aksesoris buat Kakak yang pengen tampil oke di pesta malam apapun! Ada lagi yang bisa Dian cariin?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus7);
          this.onPayment(false);
          this.onCatalog(true, catalog1);
          } else if (messages[0].text == 'Produk berdasarkan event') {
          this.onReceive('Event apanih yang mau Kakak datengin? Dian bisa bantu cariin buat banyak event loh, mulai dari pesta pernikahan sampai interview kerja.');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          this.onReceive2('Ketik event lain disini');
          } else if (messages[0].text == 'Bayar sekarang') {
          this.onReceive('Oke! Mohon klik tombol di bawah ini ya Kak untuk melanjutkan pembayaran');
          this.onCategories(false, categories1);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(true);
          this.onReceive2('Ketik teks disini');
          } else if (messages[0].text == 'Cari produk') {
          this.onReceive('Kakak bisa langsung ketik produk yang Kakak mau cari di bawah. Pencarian produk bisa mendetail sampe warna dan ukuran produk yang Kakak mau.');
          this.onReceive('Ini beberapa kategori produk yang tersedia disini. Kakak bisa pilih produknya berdasarkan kategori di bawah.');
          this.onCategories(true, categories2);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          this.onReceive2('Ketik pencarian produk disini');
          } else if (messages[0].text == 'Pakaian wanita') {
          this.onReceive('Ini beberapa kategori produk Pakaian wanita.');
          this.onCategories(true, categories3);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          this.onReceive2('Ketik pencarian produk disini');
          } else if (messages[0].text == 'Gaun wanita') {
          this.onReceive('Ini koleksi gaun wanita kami, ada yang Kakak suka? 😃');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus7);
          this.onPayment(false);
          this.onCatalog(true, catalog1);
          } else if (messages[0].text == 'Lihat produk selanjutnya') {
          this.onReceive('Oke deh! ini inspirasi pakaian dan aksesoris buat Kakak yang pengen tampil oke di pesta malam apapun! Ada lagi yang bisa Dian cariin?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus7);
          this.onPayment(false);
          this.onCatalog(true, catalog1);
          } else if (messages[0].text == 'Beli Dress Panjang Hijau Wanita') {
          this.onReceive('Oke, Dian bantu pesankan dressnya ya, Kakak mau pesan ukuran apa?');
          this.onReceive('Kakak butuh size chartnya?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus8);
          this.onPayment(false);
          this.onCatalog(false, catalog1);
          } else if (messages[0].text == 'Size chart') {
          this.onReceive('Ini size chart untuk produk Dress Panjang Hijau Wanita\nUkuran: (lingkar dada x pinggang x panjang)\nXS: (70x50x150cm)\nS: (72x52x150cm)\nM: (74x54x152cm)\nL: (76x56x152cm)\nXL: (78x58x154cm)');
          this.onReceive('Kakak mau ukuran yang mana?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus9);
          this.onPayment(false);
          this.onCatalog(false, catalog1);
          } else if (messages[0].text == 'M') {
          this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
          this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories1);
          this.onQuickReply(true, menus10);
          this.onPayment(false);
          this.onCatalog(false, catalog1);
          } else if (messages[0].text == 'Cari produk lain') {
          this.onReceive('Mau cari produk apa, kak?');
          this.onReceive('Ini beberapa kategori produk yang tersedia disini. Kakak bisa pilih produknya berdasarkan kategori di bawah.');
          this.onReceive2('Ketik pencarian produk disini');
          this.onCategories(true, categories2);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Check out') {
          this.onReceive('Oke, Dian minta alamat pengirimannya dulu ya, Kak.');
          this.onReceive('Siapa nama penerima pesanan?');
          this.onReceive2('Ketik nama penerima disini');
          this.onCategories(false, categories2);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Catherine P') {
          this.onReceive('Sekarang alamat lengkap penerima ya, Kak. Tolong tulis kecamatan dan kode posnya juga.');
          this.onReceive2('Ketik alamat penerima disini');
          this.onCategories(false, categories2);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == 'Bandung') {
          this.onReceive('Terakhir, nomor HP penerima.');
          this.onReceive2('Ketik nomor penerima disini');
          this.onCategories(false, categories2);
          this.onQuickReply(false, menus2);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (messages[0].text == '087788995609') {
          this.onReceive('Trims, Kak. Dian ulang ya datanya.\nNama: Catherine P\nAlamat: Bandung\nNo HP: 087788995609');
          this.onReceive2('Sudah benar kak alamatnya?');
          this.onReceive2('Ketik teks disini');
          this.onCategories(false, categories2);
          this.onQuickReply(true, menus11);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
        } else if (messages[0].text == 'Benar') {
          this.onCategories(false, categories2);
          this.onQuickReply(true, menus11);
          this.onCatalog(false, catalog1);
          this.onPayment(false);
          } else if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Mohon maaf, Dian ga paham maksud Kakak. Saat ini Dian masih dalam pengembangan, mohon berikan kritik dan saran untuk Dian ya.');
              this.onReceive2('Ketik teks disini');
              this.onQuickReply(false, menus1);
              this.onCategories(false, categories1);
              this.onPayment(false);
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

  onMenu(bool, array) {
    this.setState((previousState) => {
      return {
        isMenu: bool,
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

  onPayment(bool) {
    this.setState((previousState) => {
      return {
        isPayment: bool,
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

  onPressPersistentMenu(text2) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
  }

  onPressMenu() {
    var menu= this.state.isMenu;
    this.onMenu(!menu, menus1);
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

  onPressWishlist(text2,idx) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
  }

  onPressPayButton() {
    this.setModalVisible(true);
  }


  onPressProductDetail() {
    this.setModal2Visible(true);
  }

  onTriggerMessage(text2) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
    this.setModalVisible(!this.state.modalVisible);
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
         onPress={this.onPressMenu.bind(this)}
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

  renderPersistentMenu(props) {
    return (
      <PersistentMenu
        {...props}
        onPress={this.onPressPersistentMenu.bind(this)}
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

  renderPayButton(props) {
    return (
      <PayButton
        {...props}
        style={{paddingBottom:9, paddingLeft: 50}}
        onPress={this.onPressPayButton.bind(this)}
      />
    );
  }

  renderCatalog(props) {
    return (
      <ScrollCatalog
        {...props}
        style={{paddingBottom:86, paddingLeft: 20}}
        onPress={this.onPressCatalog.bind(this)}
        onPress2={this.onPressProductDetail.bind(this)}
        onPress3={this.onPressWishlist.bind(this)}
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

  renderImages({item, index}) {
    return(
          <TouchableWithoutFeedback
            key={index}
          >
            <Image
              source={{uri: item}}
              style={{width: Dimensions.get('window').width, height: 350}}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
      );
  }

  renderColors() {
    let colors = [];
    this.state.product.colors.map((color, i) => {
      colors.push(
        <Item key={i} label={color} value={color} />
      );
    });
    return colors;
  }

  renderSize() {
    let size = [];
    this.state.product.sizes.map((s, i) => {
      size.push(
        <Item key={i} label={s} value={s} />
      );
    });
    return size;
  }

  renderSimilairs() {
    let items = [];
    let stateItems = this.state.product.similarItems;
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <ProductComponent key={stateItems[i].id} product={stateItems[i]} />
            <ProductComponent key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <ProductComponent key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }

  openGallery(pos) {
    Actions.imageGallery({images: this.state.product.images, position: pos});
  }

  addToCart() {
    var product = this.state.product;
    product['color'] = this.state.selectedColor;
    product['size'] = this.state.selectedSize;
    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if(!res) AsyncStorage.setItem("CART",JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        items.push(product);
        AsyncStorage.setItem("CART",JSON.stringify(items));
      }
      Toast.show({
        text: 'Product added to your cart !',
        position: 'bottom',
        type: 'success',
        buttonText: 'Dismiss',
        duration: 3000
      });
    });
  }

  addToWishlist() {
    var product = this.state.product;
    var success = true;
    AsyncStorage.getItem("WISHLIST", (err, res) => {
      if(!res) AsyncStorage.setItem("WISHLIST",JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        if(this.search(items, product)) {
          success = false
        }
        else {
          items.push(product);
          AsyncStorage.setItem("WISHLIST",JSON.stringify(items));
        }
      }
      if(success) {
        Toast.show({
          text: 'Product added to your wishlist !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
      else {
        Toast.show({
          text: 'This product already exist in your wishlist !',
          position: 'bottom',
          type: 'danger',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
    });
  }


  render() {
    if (!this.state.isReady) {
    return <Expo.AppLoading />;
    }

    let images = this.state.product.images;
    const detailHarga = this.state.detail ? (
    <View style={s.detail}>
      <Text style={{marginLeft: 15, marginTop: 11,fontSize: 13}}>Dress: Rp 600.000</Text>
      <Text style={{marginLeft: 15, marginTop: 2,fontSize: 13}}>Ongkir: Rp 11.000</Text>
    </View>
      ) : false;

    return (
      <SafeAreaView style={styles.container}>
            <NavBar style={navbarPayment}>
                <NavButton />
                <NavButton />
                <NavButton />
                <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
                <NavTitle style={navbarPayment.title}>
                  {"     Dian"}
                </NavTitle>
                <NavButton />
                <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
              <NavButton />
                <NavButton style={navbarPayment.navButton}>
                  <Image style={navbarPayment.image}
                    resizeMode={"contain"}
                    source={require('./shared/static/ic_search_white.png')}
                  />
                </NavButton>
                <NavButton style={navbarPayment.navButton}>
                  <Image style={navbarPayment.image}
                    resizeMode={"contain"}
                    source={require('./shared/static/ic_settings_white.png')}
                  />
                </NavButton>
            </NavBar>
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>

          <SafeAreaView style={styles.container}>
          <NavBar style={navbarPayment}>
                <NavButton style={navbarPayment.navButton} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                  <Image style={navbarPayment.image}
                    resizeMode={"contain"}
                    source={require('./shared/static/ic_close_white.png')}
                  />
                </NavButton>
                <NavTitle style={navbarPayment.title}>
                  {"Pembayaran"}
                </NavTitle>
                <NavButton />
            </NavBar>
            <View style={s.container}>
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
                onPress={() => {
                  this.onTriggerMessage('Beli produk')
                }}
                underlayColor='#fff'>
                <Text style={s.loginText}>Bayar</Text>
                </TouchableOpacity>
                </View>
          </SafeAreaView>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal2Visible}>

          <SafeAreaView style={styles.container}>
          <NavBar style={navbarPayment}>
                <NavButton style={navbarPayment.navButton} onPress={() => {
                  this.setModal2Visible(!this.state.modal2Visible);
                }}>
                  <Image style={navbarPayment.image}
                    resizeMode={"contain"}
                    source={require('./shared/static/ic_close_white.png')}
                  />
                </NavButton>
                <NavTitle style={navbarPayment.title}>
                  {"       Detail Produk"}
                </NavTitle>
                <NavButton />
                <NavButton />
            </NavBar>
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Content>
          <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              enableSnap={true}
              data={images}
              renderItem={this.renderImages}
            />
            <Pagination
              dotsLength={this.state.product.images.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{ backgroundColor: 'transparent',paddingTop: -10, paddingBottom: 0, marginTop: -30, marginBottom:10}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          <View style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}>
            <Grid>
              <Col size={2}>
                <Text style={{fontSize: 20}}>{this.state.product.title}</Text>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.state.product.price}</Text>
              </Col>
            </Grid>
            <Grid style={{marginTop: 10}}>
              <Col>
                  <TouchableOpacity>
                    <Text style={{fontSize: 14, color: "#2d7df6"}}>⭐⭐⭐⭐⭐ (5 Ulasan)</Text>
                  </TouchableOpacity>
              </Col>
            </Grid>           
            <Grid style={{marginTop: 10}}>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Warna:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Pilih Warna"
                  note={true}
                  selectedValue={this.state.selectedColor}
                  onValueChange={(color) => this.setState({selectedColor: color})}
                >
                  {this.renderColors()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Ukuran:</Text>
                </View>
              </Col>
              <Col size={3}>
                <Picker
                  mode="dropdown"
                  placeholder="Pilih Ukuran"
                  note={true}
                  selectedValue={this.state.selectedSize}
                  onValueChange={(size) => this.setState({selectedSize: size})}
                >
                  {this.renderSize()}
                </Picker>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Jumlah:</Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Button style={{flex: 1}} icon light onPress={() => this.setState({quantity: this.state.quantity>1 ? this.state.quantity-1 : 1})} >
                    <Icon name='ios-remove-outline' />
                  </Button>
                  <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30}}>
                    <Text style={{fontSize: 18}}>{this.state.quantity}</Text>
                  </View>
                  <Button style={{flex: 1}} icon light onPress={() => this.setState({quantity: this.state.quantity+1})}>
                    <Icon name='ios-add' />
                  </Button>
                </View>
              </Col>
            </Grid>
            <Grid style={{marginTop: 15}}>
              <Col size={3}>
                <Button block onPress={this.addToCart.bind(this)}>
                  <Text style={{color: "#fdfdfd", marginLeft: 5}}>Beli Produk</Text>
                </Button>
              </Col>
              <Col>
              <Button block onPress={this.addToWishlist.bind(this)} icon transparent style={{backgroundColor: '#fdfdfd'}}>
                <Icon name='ios-heart' />
              </Button>
              </Col>
            </Grid>
            <View style={{marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
              <Text style={{marginBottom: 5}}>Deskripsi</Text>
              <View style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
              <NBText note>
                {this.state.product.description}
              </NBText>
            </View>
          </View>
          <View style={{marginTop: 15, paddingLeft: 12, paddingRight: 12}}>
            <Text style={{marginBottom: 5}}>Rating dan Ulasan</Text>
            <SafeAreaView style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
            {this.renderSimilairs()}
          </View>
          <View style={{marginTop: 15, paddingLeft: 12, paddingRight: 12}}>
            <Text style={{marginBottom: 5}}>Informasi Penjual</Text>
            <SafeAreaView style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
          </View>
        </Content>
      </Container>
          </SafeAreaView>
        </Modal>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            loadEarlier={this.state.loadEarlier}
            placeholder={this.state.placeholder}
            isQuickReply={this.state.isQuickReply}
            isMenu={this.state.isMenu}
            isCategories={this.state.isCategories}
            isPayment={this.state.isPayment}
            isCatalog={this.state.isCatalog}
            slider1ActiveSlide={this.state.slider1ActiveSlide}
            items={this.state.items}
            items2={this.state.items2}
            entries={this.state.entries}
            onReceive2={this.onReceive2}
            onReceive3={this.onReceive2}
            onQuickReply={this.onQuickReply}
            onMenu={this.onMenu}
            onCategories={this.onCategories}
            onTriggerMessage={this.onTriggerMessage}
            onCatalog={this.onCatalog}
            onLoadEarlier={this.onLoadEarlier}
            isLoadingEarlier={this.state.isLoadingEarlier}
            user={{
              _id: 1, 
            }}
            renderActions={this.renderCustomActions}
            renderMenu={this.renderCustomMenu}
            renderBubble={this.renderBubble}
            renderCustomView={this.renderCustomView}
            renderQuickReply={this.renderQuickReply}
            renderPersistentMenu={this.renderPersistentMenu}
            renderCategories={this.renderCategories}
            renderPayButton={this.renderPayButton}
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

class ModalScreen extends React.Component {
   

}


const s = StyleSheet.create({
  harga: {
    backgroundColor: "#fff",
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
    backgroundColor: "#efeff4",
    height:800,
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


const dummyProduct = {
  id: 2,
  title: 'Dress Panjang Hijau Wanita',
  description: "Pellentesque orci lectus, bibendum iaculis aliquet id, ullamcorper nec ipsum. In laoreet ligula vitae tristique viverra. Suspendisse augue nunc, laoreet in arcu ut, vulputate malesuada justo. Donec porttitor elit justo, sed lobortis nulla interdum et. Sed lobortis sapien ut augue condimentum, eget ullamcorper nibh lobortis. Cras ut bibendum libero. Quisque in nisl nisl. Mauris vestibulum leo nec pellentesque sollicitudin. Pellentesque lacus eros, venenatis in iaculis nec, luctus at eros. Phasellus id gravida magna. Maecenas fringilla auctor diam consectetur placerat. Suspendisse non convallis ligula. Aenean sagittis eu erat quis efficitur. Maecenas volutpat erat ac varius bibendum. Ut tincidunt, sem id tristique commodo, nunc diam suscipit lectus, vel",
  image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
  images: [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
  price: 'Rp 600.000',
  colors: ['Hijau'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  category: 'Pesta Wanita',
  similarItems: [
    {id: 10, title: 'V NECK T-SHIRT', price: '29$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg'},
    {id: 11, title: 'V NECK T-SHIRT', price: '29$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'},
  ]
};

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

