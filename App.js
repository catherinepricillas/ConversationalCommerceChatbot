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
  TouchableHighlight,
  Animated,
  Alert
} from 'react-native';
import Expo from 'expo';
import {GiftedChat, Actions, Bubble, SystemMessage, Send, InputToolbar, Menu, Composer, ScrollingButtonMenu, ScrollCategories, ScrollCatalog, PayButton, YellowBox, PersistentMenu, Basket, Wishlist, History, Address} from 'react-native-gifted-chat';
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
import ActionSheet from 'react-native-actionsheet'

console.disableYellowBox = true;

let menus1 = [
    {
       text:'Kategori produk',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cari berdasarkan kata kunci',
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
       text:'Produk berdasarkan event',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Produk terlaris',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Produk terbaru',
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
       text:'Cari produk lain',
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
       text:'Urutkan',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Filter',
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

let menus12 = [
    {
       text:'Bank transfer',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Kartu kredit',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Cash on delivery',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus13 = [
    {
       text:'Lacak pesanan',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pesanan sampai',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Komplain',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus14 = [
    {
       text:'Tulis ulasan dan rating',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Ajukan pengembalian',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Komplain',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus15 = [
    {
       text:'Puas',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Biasa saja',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Kurang puas',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus16 = [
    {
       text:'Pesanan tak sampai',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pesanan rusak',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Pesanan salah',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
];

let menus17 = [
    {
       text:'Oke',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Upload bukti transfer',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
];

let menus18 = [
    {
       text:'Check out',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Belanja lagi',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
];

let menus19 = [
    {
       text:'Harga',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Popularitas',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Rating',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Pembelian',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
];

let menus20 = [
    {
       text:'Harga',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Brand',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    },
    {
       text:'Warna',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Model',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Ukuran',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Rating',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
];

let menus21 = [
    {
       text:'Simpan',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
    {
       text:'Tidak',
       textColor:'#eba43b',
       backgroundColor:'#FFFFFF',
       borderColor:'#eba43b',
    }, 
];

let menus22 = [
    {
       text:'Tambah alamat baru',
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



let categories5 = [
    {
       url:require('./shared/static/kado.png'),
       text: 'Avatar',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/kategori.png'),
       text: 'Kategori produk',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/keyword.png'),
       text: 'Cari berdasarkan kata kunci',
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
       url: require('./shared/static/bestselling.png'),
       text: 'Produk terlaris',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/new.png'),
       text: 'Produk terbaru',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/rekomendasi.png'),
       text: 'Rekomendasi',
       borderColor: '#327cce'
    },
    {
       url: require('./shared/static/promosi.png'),
       text: 'Promosi',
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
       text: 'Dress wanita',
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

let categories4 = [
    {
       url:require('./shared/static/kado.png'),
       text: 'Avatar',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/transfer.png'),
       text: 'Transfer',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/kartukredit.png'),
       text: 'Kartu kredit',
       borderColor: '#327cce',
    },
    {
       url:require('./shared/static/cashondelivery.png'),
       text: 'Cash on delivery',
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
            next: false,
        },
        {
            title: 'Dress Midi Krem Wanita',
            subtitle: 'Rp. 400.000',
            illustration: require('./shared/static/Gold.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next:false,
        },
        {
            title: 'Dress Mini Periwinkle Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Periwinkle.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next:false,
        },
        {
            title: 'Dress Silver Pesta Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Silver.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next:false,
        },
        {
            title: 'Dress Midi Lace Wanita',
            subtitle: 'Rp. 350.000',
            illustration: require('./shared/static/Lace.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next: false,
        },
        {
            title: 'Dress Midi Biru Wanita',
            subtitle: 'Rp. 300.000',
            illustration: require('./shared/static/BIrumidi.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next: false,
        },
        {
            title: 'Dress Mini Berry Wanita',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/Berry.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next: false,
        },
        {
            title: 'Lihat produk selanjutnya',
            subtitle: 'Rp. 250.000',
            illustration: require('./shared/static/next.png'),
            rating: require('./shared/static/five-stars.png'),
            love: false,
            next: true,
        },
      ];

let catalog2 = [
        {
            title: 'Dress Panjang Hijau Wanita',
            subtitle: 'Rp. 600.000',
            illustration: require('./shared/static/Dress.png'),
            rating: require('./shared/static/five-stars.png'),
            love: true,
        },
      ];

let catalog4 = [
      {
          title: 'Dress Panjang Hijau Wanita',
          subtitle: 'Rp. 600.000',
          illustration: require('./shared/static/Dress.png'),
          rating: require('./shared/static/five-stars.png'),
          love: false,
      },
      ];

let catalog3 = [
        {
            title: 'Dress Panjang Hijau Wanita',
            subtitle: '#1919292',
            illustration: require('./shared/static/Dress.png'),
        },
      ];

let catalog5 = [
        {
            title: 'Dress Panjang Hijau Wanita',
            subtitle: '#1919292',
            illustration: require('./shared/static/Dress.png'),
        },
        {
            title: 'Dress Midi Berry Wanita',
            subtitle: '#1919292',
            illustration: require('./shared/static/Dress.png'),
        },
      ];

  let alamat1 = [
    {
        namaalamat: 'Rumah',
        nama: 'Catherine P',
        alamat: 'Jalan Tengku Angkasa, Bandung 40132',
        no: '087788995609',
        next: false,
        illustration: require('./shared/static/Dress.png'),
    },
    {
        namaalamat: 'Kosan',
        nama: 'Catherine P',
        alamat: 'Jalan Dayang Sumbi, Bandung 40132',
        no: '087788995609',
        next: false,
        illustration: require('./shared/static/Dress.png'),
    },
    {
        namaalamat: 'next',
        nama: 'Catherine P',
        alamat: 'Jalan Dayang Sumbi, Bandung 40132',
        no: '087788995609',
        next: true,
        illustration: require('./shared/static/tambah.png'),
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
      isBasket: false,
      isWishlist: false,
      isHistory: false,
      isAddress: false,
      slider1ActiveSlide: 0,
      modalVisible: false,
      modal2Visible: false,
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
      isReady:false,
      messagesContainerHeight:null,
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
    this.renderBasket = this.renderBasket.bind(this);
    this.renderHistory = this.renderHistory.bind(this);
    this.renderAddress = this.renderAddress.bind(this);
    this.renderWishlist = this.renderWishlist.bind(this);
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
    this.onBasket = this.onBasket.bind(this);
    this.onHistory = this.onHistory.bind(this);
    this.onAddress = this.onAddress.bind(this);
    this.onWishlist = this.onWishlist.bind(this);
    this.onPressCategories = this.onPressCategories.bind(this);
    this.onPressPayButton = this.onPressPayButton.bind(this);
    this.onPressCatalog = this.onPressCatalog.bind(this);
    this.onPressProductDetail = this.onPressProductDetail.bind(this);
    this.onPressWishlist = this.onPressWishlist.bind(this);
    this.onTriggerMessage = this.onTriggerMessage.bind(this);
    this.onTriggerMessage2 = this.onTriggerMessage2.bind(this);
    this.renderPMenu = this.renderPMenu.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
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

  showActionSheet = () => {
    this.ActionSheet.show()
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
    this.onQuickReply(false, []),
    this.onMenu(false, menus1);
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  onActionsPress2() {
    const options = ['Gambar', 'Kirim Lokasi', 'Tutup'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          this.setModalVisible(true);
          break;
        case 1:
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.props.onSend({
                location: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
              });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
          );
          break;
        default:
      }
    });
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
            this.onReceive('Terima kasih atas konfirmasi pembayarannya Kak. Dian cek dulu ya.');
            this.onReceive2('Ketik teks disini');
            this.onQuickReply(false, menus1);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onHistory(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onAddress(false, alamat1);
          } else if (messages[0].location) {
            this.onReceive('Itu lokasi apa ya, Kak?');
            this.onReceive2('Ketik teks disini');
            this.onQuickReply(false, menus1);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false, catalog2);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Catherine') {
            this.onReceive('Hai, Kak Catherine! Mau cari produk apa nih?');
            this.onReceive('Ini beberapa pencarian produk yang bisa Kakak lakukan.');
            this.onReceive2('Ketik pencarian produk disini');
            this.onQuickReply(false, menus1);
            this.onCategories(true, categories5);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false, catalog2);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Cari inspirasi') {
            this.onReceive('Kakak lagi cari inspirasi untuk apa nih?');
            this.onReceive2('Ketik pencarian inspirasi disini');
            this.onQuickReply(false, menus1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onHistory(false,catalog3);
            this.onWishlist(false, catalog2);
            this.onCategories(true, categories1);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Inspirasi hadiah') {
            this.onReceive('Kamu mau cari hadiah buat siapa nih? Buat pasangan? Ibu? Ayah? Saudara? Atau teman?');
            this.onQuickReply(true, menus3);
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Urutkan') {
            this.onReceive('Kakak mau lihat urutan produknya sesuai apa?');
            this.onQuickReply(true, menus19);
            this.onReceive2('Ketik urutan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Filter') {
            this.onReceive('Kakak mau filter produknya sesuai apa?');
            this.onQuickReply(true, menus20);
            this.onReceive2('Ketik filter disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Harga') {
            this.onReceive('Kakak bisa pilih range harga di bawah ini atau Kakak bisa ketik langsung. Untuk produk dress wanita harga berkisar dari 300rb sampai 1jt rupiah, Kak Catherine?');
            this.onQuickReply(true, menus21);
            this.onReceive2('Ketik range harga disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Pesta malam') {
            this.onReceive('Oke Kak! Kakak mau cari inspirasinya untuk pakaian wanita atau pria?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus4);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Wanita') {
            this.onReceive('Oke... Kakak mau cari apa nih? Aksesoris, pakaian, sepatu, atau seluruh outfit untuk pesta?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus5);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Tambahkan Dress Panjang Hijau Wanita ke wishlist') {
            this.onReceive('Dress Midi Biru Wanita berhasil ditambahkan ke wishlist Kakak.');
            this.onReceive('Untuk produk-produk di wishlist Kakak, Kak Catherine bisa klik menu di sebelah kiri bawah layar. Jangan cuma ditaruh di wishlist aja kak, nanti kehabisan loh, produknya laku nih soalnya!');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(false, menus5);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onHistory(false,catalog3);
            this.onWishlist(false, catalog2);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Beri rating dan ulasan') {
            this.onReceive('Menurut Kakak berapa rating untuk produk Dress Panjang Hijau Wanita?');
            this.onReceive2('Ketik rating disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus6);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Pakaian') {
            this.onReceive('Oke deh! Ini inspirasi pakaian dan aksesoris buat Kakak yang pengen tampil oke di pesta malam apapun! Ada lagi yang bisa Dian cariin?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus7);
            this.onPayment(false);
            this.onBasket(false, catalog1);
            this.onWishlist(false, catalog1);
            this.onHistory(false,catalog1);
            this.onCatalog(true, catalog1);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Produk berdasarkan event') {
            this.onReceive('Event apanih yang mau Kakak datengin? Dian bisa bantu cariin buat banyak event loh, mulai dari pesta pernikahan sampai interview kerja.');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onReceive2('Ketik event lain disini');
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Kartu kredit') {
            this.onReceive('Oke! Mohon klik tombol di bawah ini ya Kak untuk melanjutkan pembayaran');
            this.onCategories(false, categories1);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(true);
            this.onReceive2('Ketik teks disini');
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Kategori produk') {
            this.onReceive('Ini beberapa kategori produk yang tersedia disini. Kakak bisa pilih produknya berdasarkan kategori di bawah.');
            this.onCategories(true, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onReceive2('Ketik pencarian produk disini');
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Cari berdasarkan kata kunci') {
            this.onReceive('Kakak bisa langsung ketik produk yang Kakak mau cari di bawah. Pencarian produk bisa mendetail sampe warna dan ukuran produk yang Kakak mau.');
            this.onCategories(false, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onReceive2('Ketik pencarian produk disini');
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Pakaian wanita') {
            this.onReceive('Ini beberapa kategori produk Pakaian wanita.');
            this.onCategories(true, categories3);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onReceive2('Ketik pencarian produk disini');
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Wishlist') {
            this.onReceive('Ini produk di wishlist Kakak. Jangan cuma ditaruh di wishlist aja kak, nanti kehabisan loh');
            this.onCategories(false, categories3);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog2);
            this.onPayment(false);
            this.onReceive2('Ketik pencarian produk disini');
            this.onBasket(false, catalog2);
            this.onHistory(false,catalog2);
            this.onWishlist(true, catalog2);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Dress wanita') {
            this.onReceive('Ini koleksi dress wanita kami, ada yang Kakak suka? 😃');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus7);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onCatalog(true, catalog1);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Lihat produk selanjutnya') {
            this.onReceive('Ini produk selanjutnya');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus7);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onHistory(false,catalog3);
            this.onWishlist(false, catalog2);
            this.onCatalog(true, catalog1);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Beli Dress Panjang Hijau Wanita') {
            this.onReceive('Oke, Dian bantu pesankan dressnya ya, Kakak mau pesan ukuran apa?');
            this.onReceive('Kakak butuh size chartnya?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus8);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Size chart') {
            this.onReceive('Ini size chart untuk produk Dress Panjang Hijau Wanita\nUkuran: (lingkar dada x pinggang x panjang)\nXS: (70x50x150cm)\nS: (72x52x150cm)\nM: (74x54x152cm)\nL: (76x56x152cm)\nXL: (78x58x154cm)');
            this.onReceive('Kakak mau ukuran yang mana?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus9);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'M') {
            this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus10);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'S') {
            this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus10);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'L') {
            this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus10);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'XL') {
            this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus10);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'XS') {
            this.onReceive('Produk sudah Dian masukkan ke dalam keranjang belanja Kakak. Buat liat keranjang belanja, Kakak bisa pilih menu di kiri bawah. Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive('Kakak masih mau cari produk lain atau mau check out sekarang?');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories1);
            this.onQuickReply(true, menus10);
            this.onPayment(false);
            this.onCatalog(false, catalog1);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Cari produk lain') {
            this.onReceive('Mau cari produk apa, kak?');
            this.onReceive('Ini beberapa kategori produk yang tersedia disini. Kakak bisa pilih produknya berdasarkan kategori di bawah.');
            this.onReceive2('Ketik pencarian produk disini');
            this.onCategories(true, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Check out') {
            this.onReceive('Oke, Dian minta alamat pengirimannya dulu ya, Kak.');
            this.onReceive('Siapa nama penerima pesanan?');
            this.onReceive2('Ketik nama penerima disini');
            this.onCategories(false, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Catherine P') {
            this.onReceive('Sekarang alamat lengkap penerima ya, Kak. Tolong tulis kecamatan dan kode posnya juga.');
            this.onReceive2('Ketik alamat penerima disini');
            this.onCategories(false, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Jalan Tengku Angkasa, Bandung 40132') {
            this.onReceive('Terakhir, nomor HP penerima.');
            this.onReceive2('Ketik nomor penerima disini');
            this.onCategories(false, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Check out sekarang') {
            this.onReceive('Mau dikirim ke alamat yang mana Kak?');
            this.onCategories(false, categories2);
            this.onQuickReply(false, menus2);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(true, alamat1);
          } else if (messages[0].text == '087788995609') {
            this.onReceive('Trims, Kak. Dian ulang ya datanya.\nNama: Catherine P\nAlamat: Jalan Tengku Angkasa, Bandung 40132\nNo HP: 087788995609');
            this.onReceive('Sudah benar kak alamatnya? Mohon konfirmasinya.');
            this.onReceive2('Ketik teks disini');
            this.onCategories(false, categories2);
            this.onQuickReply(true, menus11);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Benar') {
            this.onReceive('Kakak mau Dian simpan data alamat Kakak ga? Kalau Dian simpan next Kakak belanja Kakak ga perlu isi datanya lagi.');
            this.onReceive2('Ketik teks disini');
            this.onQuickReply(true, menus21);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onCategories(false, categories4);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Simpan') {
            this.onReceive('Mohon ketik nama alamatnya, Kak. Contohnya: Rumah, Kosan, Kantor');
            this.onReceive2('Ketik nama alamat disini');
            this.onQuickReply(false, menus21);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onCategories(false, categories4);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Tidak') {
            this.onReceive('Berikut total pesanan Kakak ya\nDress Panjang Hijau Wanita: Rp 600.000\nOngkir: Rp 11.000\nTotal Tagihan: Rp 611.000');
            this.onReceive('Mau bayar dengan metode apa Kak?');
            this.onReceive('Pembayaran disini terjamin aman dengan menggunakan payment gateway, disini Dian ga nyimpen informasi kartu kredit aman.');
            this.onQuickReply(false, menus11);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onCategories(true, categories4);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Rumah') {
            this.onReceive('Alamat kakak sudah tersimpan ya');
            this.onReceive('Berikut total pesanan Kakak ya\nDress Panjang Hijau Wanita: Rp 600.000\nOngkir: Rp 11.000\nTotal Tagihan: Rp 611.000');
            this.onReceive('Mau bayar dengan metode apa Kak?');
            this.onReceive('Pembayaran disini terjamin aman dengan menggunakan payment gateway, disini Dian ga nyimpen informasi kartu kredit aman.');
            this.onQuickReply(false, menus11);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onCategories(true, categories4);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Pembayaran berhasil') {
            this.onReceive('Terima kasih! Pembayaran Kakak dengan kartu ');
            this.onReceive('Mau bayar dengan metode apa Kak?');
            this.onReceive('Pembayaran disini terjamin aman dengan menggunakan payment gateway, disini Dian ga nyimpen informasi kartu kredit aman.');
            this.onCategories(true, categories1);
            this.onQuickReply(false, menus11);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Lacak pesanan') {
            this.onReceive('Status Pesanan #1919292\n\nJumat, 5 Mei 2018: Pesanan bersama dengan kurir\nKamis, 4 Mei 2018: Pesanan tiba di BDO_Gateway\nRabu, 3 Mei 2018: Pesanan dikirimkan');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(true, menus13);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Pesanan sampai') {
            this.onReceive('Terima kasih Kak! Semoga kakak suka sama pesanannya.');
            this.onReceive('Apakah Kakak puas dengan pesanannya? Mohon tulis ulasan sama rating produk ya. Jika Kakak tidak puas Kakak juga bisa mengajukan komplain.');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(true, menus14);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Tulis ulasan dan rating') {
            this.onReceive('Berapa rating yang Kakak berikan untuk produk Dress Panjang Biru Wanita?');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(true, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == '⭐⭐⭐⭐⭐') {
            this.onReceive('Terima kasih atas ratingnya. Tolong tulis ulasan kakak untuk produk Dress Panjang Biru Wanita.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == '⭐⭐⭐⭐') {
            this.onReceive('Terima kasih atas ratingnya. Tolong tulis ulasan kakak untuk produk Dress Panjang Biru Wanita.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == '⭐⭐⭐') {
            this.onReceive('Terima kasih atas ratingnya. Tolong tulis ulasan kakak untuk produk Dress Panjang Biru Wanita.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == '⭐⭐') {
            this.onReceive('Terima kasih atas ratingnya. Apakah ada masalah dengan produknya Kak? Kakak bisa mengajukan pengembalian pesanan kalo mau.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == '⭐') {
            this.onReceive('Terima kasih atas ratingnya. Apakah ada masalah dengan produknya Kak? Kakak bisa mengajukan pengembalian pesanan kalo mau.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus6);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Produk bagus') {
            this.onReceive('Terima kasih atas ulasannya Kak.');
            this.onReceive('Apakah Kakak puas dengan pelayanan dari Dian? Mohon maaf kalo Dian ada salah kata, tolong berikan kritik dan saran untuk pengembangan Dian ke depannya ya.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(true, menus15);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Kurang puas') {
            this.onReceive('Mohon maaf kalo Dian masih kurang maksimal. Mohon berikan kritik dan saran untuk Dian.');
            this.onReceive2('Ketik ulasan disini');
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onQuickReply(false, menus15);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Mulai Pencarian Baru') {
            this.onReceive('Kakak mau cari apa?');
            this.onReceive2('Ketik pencarian disini');
            this.onQuickReply(false, menus1);
            this.onCategories(true, categories5);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Belanja lagi') {
            this.onReceive('Kakak mau belanja apa lagi nih? Dian bantu carikan ya');
            this.onReceive2('Ketik pencarian disini');
            this.onQuickReply(false, menus1);
            this.onCategories(true, categories5);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Komplain') {
            this.onReceive('Ada masalah apa ya kak?');
            this.onReceive2('Ketik komplain disini');
            this.onQuickReply(true, menus16);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Keranjang Belanja') {
            this.onReceive('Ini produk-produk dalam keranjang belanja Kakak. Check out sekarang untuk memesan.');
            this.onReceive2('Ketik tesk disini');
            this.onQuickReply(true, menus18);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onBasket(true, catalog4);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Transfer bank') {
            this.onReceive('Untuk metode transfer bank, mohon kirim ke beberapa rekening kami di bawah ini ya');
            this.onReceive2('Total: Rp 611.000\nRekening a.n PT Commerce Indonesia\nBank Mandiri: 292 383 2234\nBank BCA: 383 736 373');
            this.onReceive2('Jika sudah transfer, tolong konfirmasi dengan mengirimkan bukti pembayaran ya Kak.');
            this.onQuickReply(true, menus17);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Hapus Dress Panjang Hijau Wanita dari keranjang belanja') {
            this.onReceive('Produk udah dihapus dari keranjang belanja kakak');
            this.onReceive2('Total: Rp 611.000\nRekening a.n PT Commerce Indonesia\nBank Mandiri: 292 383 2234\nBank BCA: 383 736 373');
            this.onReceive2('Jika sudah transfer, tolong konfirmasi dengan mengirimkan bukti pembayaran ya Kak.');
            this.onQuickReply(false, menus17);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(false,catalog3);
            this.onAddress(false, alamat1);
          } else if (messages[0].text == 'Histori Transaksi') {
            this.onReceive('Ini list histori transaksi Kakak');
            this.onQuickReply(false, menus17);
            this.onCategories(false, categories1);
            this.onCatalog(false, catalog1);
            this.onPayment(false);
            this.onBasket(false, catalog2);
            this.onWishlist(false, catalog2);
            this.onHistory(true,catalog3);
            this.onAddress(false, alamat1);
          } else if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Mohon maaf, Dian ga paham maksud Kakak. Saat ini Dian masih dalam pengembangan, mohon berikan kritik dan saran untuk Dian ya.');
              this.onReceive2('Ketik teks disini');
              this.onQuickReply(false, menus1);
              this.onCategories(false, categories1);
              this.onPayment(false);
              this.onCatalog(false, catalog1);
              this.onBasket(false, catalog2);
              this.onWishlist(false, catalog2);
              this.onHistory(false,catalog3);
              this.onAddress(false, alamat1);
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

  onMenu(bool) {
    this.setState((previousState) => {
      return {
        isMenu: bool,
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

  changeHeight() {
    this.setState((previousState) => {
      return {
        messagesContainerHeight: 300,
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

  onBasket(bool, array) {
    this.setState((previousState) => {
      return {
        isBasket: bool,
        entries: array,
      };
    });
  }

  onHistory(bool, array) {
    this.setState((previousState) => {
      return {
        isHistory: bool,
        entries: array,
      };
    });
  }

  onAddress(bool, array) {
    this.setState((previousState) => {
      return {
        isAddress: bool,
        alamat: array,
      };
    });
  }

  onWishlist(bool, array) {
    this.setState((previousState) => {
      return {
        isWishlist: bool,
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
    this.onMenu(!menu);
    this.changeHeight();
  }

  onPressCategories(menu) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: menu.text,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onQuickReply(false, []),
    this.onSend(messages);
  }

  onPressCatalog(text2) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onQuickReply(false, []),
    this.onSend(messages);
  }

  onPressWishlist(text2,idx) {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: text2,
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
        this.onQuickReply(false, []),
    this.onSend(messages);
  }

  onPressPayButton() {
    this.setModalVisible(true);
  }


  onPressProductDetail() {
    this.setModal2Visible(true);
  }

  onTriggerMessage(text2) {
    this.onReceive('Terima kasih! Pembayaran untuk order #1919292 sebesar Rp 611.000 telah kami terima.');
    this.onReceive('Pesanan akan segera Dian siapkan. Waktu persiapan pesanan kira-kira 2 hari dan waktu pengiriman ke tempat kakak biasanya 2 hari. Jadi barang akan tiba dalam 2-4 hari.');
    this.onQuickReply(true, menus13);
    this.onPayment(false);
    this.setModalVisible(!this.state.modalVisible);
  }

  onTriggerMessage2(text2) {
    this.onSend('');
    this.setModal2Visible(!this.state.modal2Visible);
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

  renderBasket(props) {
    return (
      <Basket
        {...props}
        style={{paddingBottom:86, paddingLeft: 20}}
        onPress={this.onPressCatalog.bind(this)}
        onPress2={this.onPressProductDetail.bind(this)}
        onPress3={this.onPressWishlist.bind(this)}
      />
    );
  }

  renderHistory(props) {
    return (
      <History
        {...props}
        style={{paddingBottom:86, paddingLeft: 20}}
        onPress={this.onPressCatalog.bind(this)}
        onPress2={this.onPressProductDetail.bind(this)}
        onPress3={this.onPressWishlist.bind(this)}
      />
    );
  }

  renderAddress(props) {
    return (
      <Address
        {...props}
        style={{paddingBottom:86, paddingLeft: 20}}
        onPress={this.onPressCatalog.bind(this)}
        onPress2={this.onPressProductDetail.bind(this)}
        onPress3={this.onPressWishlist.bind(this)}
      />
    );
  }

  renderWishlist(props) {
    return (
      <Wishlist
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

  renderPMenu(){
    if (this.state.isMenu === true) {
    return (
        <SafeAreaView style={{backgroundColor: '#6a9cde'}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>this.onPressPersistentMenu('Mulai Pencarian Baru')}>
              <View style={
                {
                  backgroundColor: "#fff",
                  borderColor: "#6a9cde",
                  paddingTop:7,
                  paddingBottom:7,
                  paddingLeft:16,
                  paddingRight:16,
                  borderTopWidth:1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                }
              }>
                <Text style={
                  {
                    color:"#e0a551",
                    fontSize:15.5,
                    fontWeight:this.props.fontWeight}
                  }>
                  <Image style={{height: 18, width: 18}}
                        source={require('/Users/catherinepricillas/Chatbot/shared/static/refresh.png')}
                      />
                      {'   '}
                  Mulai Pencarian Baru</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>this.onPressPersistentMenu('Keranjang belanja')}>
              <View style={
                {
                  backgroundColor: "#fff",
                  borderColor: "#6a9cde",
                  paddingTop:7,
                  paddingBottom:7,
                  paddingLeft:16,
                  paddingRight:16,
                  borderTopWidth:1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                }
              }>
                <Text style={
                  {
                    color:"#e0a551",
                    fontSize:15.5,
                    fontWeight:this.props.fontWeight}
                  }>
                  <Image style={{height: 18, width: 18}}
                        source={require('/Users/catherinepricillas/Chatbot/shared/static/cart.png')}
                      />
                      {'   '}Keranjang Belanja</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>this.onPressPersistentMenu('Wishlist')}>
              <View style={
                {
                  backgroundColor: "#fff",
                  borderColor: "#6a9cde",
                  paddingTop:7,
                  paddingBottom:7,
                  paddingLeft:16,
                  paddingRight:16,
                  borderTopWidth:1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                }
              }>
                <Text style={
                  {
                    color:"#e0a551",
                    textAlign : "center",
                    fontSize:15.5,
                    fontWeight:this.props.fontWeight}
                  }>
                  <Image style={{height: 18, width: 20}}
                        source={require('Chatbot/shared/static/heartlined.png')}
                      />
                      {'   '}Wishlist</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={this.props.selectedOpacity} onPress={()=>this._onPress('Histori Transaksi')}>
              <View style={
                {
                  backgroundColor: "#fff",
                  borderColor: "#6a9cde",
                  paddingTop:7,
                  paddingBottom:7,
                  paddingLeft:16,
                  paddingRight:16,
                  borderTopWidth:1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                }
              }>
                <Text style={
                  {
                    color:"#e0a551",
                    textAlign : "center",
                    fontSize:15.5,
                    fontWeight:this.props.fontWeight}
                  }>
                  <Image style={{height: 20, width: 20}}
                        source={require('/Users/catherinepricillas/Chatbot/shared/static/history.png')}
                      />
                      {'   '}Histori Transaksi</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>this.onPressPersistentMenu('Bantuan')}>
              <View style={
                {
                  backgroundColor: "#fff",
                  borderColor: "#6a9cde",
                  paddingTop:7,
                  paddingBottom:7,
                  paddingLeft:16,
                  paddingRight:16,
                  borderTopWidth:1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                }
              }>
                <Text style={
                  {
                    color:"#e0a551",
                    fontSize:15.5,
                    fontWeight:this.props.fontWeight}
                  }>
                  <Image style={{height: 18, width: 18}}
                        source={require('/Users/catherinepricillas/Chatbot/shared/static/help.png')}
                      />
                      {'   '}Bantuan</Text>
              </View>
          </TouchableOpacity>
        </SafeAreaView>
    )
    }
    return null;
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
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: 'Beli Dress Panjang Hijau Wanita',
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
    this.setModal2Visible(!this.state.modal2Visible);
  }

  addToWishlist() {
    const messages = [{
    _id: Math.round(Math.random() * 1000000),
    text: 'Tambahkan Dress Panjang Hijau Wanita ke wishlist',
    createdAt: new Date(),
    user: {_id: 1, name: 'User',
    }}];
    this.onSend(messages);
    this.setModal2Visible(!this.state.modal2Visible);
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
          <NavButton style={navbarPayment.navButton} onPress={this.showActionSheet}>
            <Image style={navbarPayment.image}
              resizeMode={"contain"}
              source={require('./shared/static/ic_settings_white.png')}
            />
            <ActionSheet
          ref={o => this.ActionSheet = o}
          options={['Matikan Notifikasi', 'Hapus Histori Chat', 'Hapus Pesan','Laporkan Masalah', 'Kirim Kritik dan Saran', 'Tutup']}
          cancelButtonIndex={5}
          onPress={() => { /* do something */ }}

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
                <NavButton />
                 <NavButton />
                <NavTitle style={navbarPayment.title}>
                  {"Pembayaran"}
                </NavTitle>
                <NavButton />
                <NavButton />
                <NavButton />
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
                  this.onTriggerMessage('Pembayaran berhasil')
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
                  <Text style={{fontSize: 14, color: "#2d7df6"}}>
                    <Image style={{height: 22, width: 60, marginLeft: 33, marginTop: -7}}
                        source={require('Chatbot/shared/static/fivestar.png')}/>
                    {' '}(5 Ulasan)</Text>
                  </TouchableOpacity>
              </Col>
            </Grid>           
            <Grid style={{marginTop: 15}}>
              <Col size={3}>
                <TouchableOpacity
                style={s.screenButton}
                onPress={this.addToCart.bind(this)}>
                <Text style={s.loginText}>Beli</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                onPress={this.addToWishlist.bind(this)}
                >
                <Image style={{height: 30, width: 34, marginLeft: 35, marginTop:5}}
                        source={require('Chatbot/shared/static/heartout2.png')}/>
                </TouchableOpacity>
              </Col>
            </Grid>
            <View style={{marginTop: 22, width: 360, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
              <Text style={{marginBottom: 5}}>Deskripsi</Text>
              <View style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
              <NBText note>
                {this.state.product.description}
              </NBText>
            </View>
            <View style={{marginTop: 15, width: 360, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
              <Text style={{marginBottom: 5}}>Rating dan Ulasan</Text>
              <View style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
              <NBText note>
                {this.state.product.description3}
              </NBText>
            </View>
            <View style={{marginTop: 15, width: 360, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
              <Text style={{marginBottom: 5}}>Informasi Penjual</Text>
              <View style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
              <Text>VilStore</Text>
              <NBText note>
                {this.state.product.description2}
              </NBText>
            </View>
            <TouchableOpacity
                style={s.loginScreenButton}
                onPress={() => {
                  this.onTriggerMessage('Pembayaran berhasil')
                }}
                underlayColor='#fff'>
                <Text style={s.loginText}>Bayar</Text>
                </TouchableOpacity>
          </View>
        </Content>
      </Container>
          </SafeAreaView>
        </Modal>
          <GiftedChat
            messages={this.state.messages}
            messagesContainerHeight={this.state.messagesContainerHeight}
            onSend={this.onSend}
            loadEarlier={this.state.loadEarlier}
            placeholder={this.state.placeholder}
            isQuickReply={this.state.isQuickReply}
            isMenu={this.state.isMenu}
            isCategories={this.state.isCategories}
            isPayment={this.state.isPayment}
            isAddress={this.state.isAddress}
            isCatalog={this.state.isCatalog}
            isBasket={this.state.isBasket}
            isHistory={this.state.isHistory}
            isWishlist={this.state.isWishlist}
            slider1ActiveSlide={this.state.slider1ActiveSlide}
            items={this.state.items}
            items2={this.state.items2}
            entries={this.state.entries}
            alamat={this.state.alamat}
            onReceive2={this.onReceive2}
            onReceive3={this.onReceive2}
            onQuickReply={this.onQuickReply}
            onMenu={this.onMenu}
            onCategories={this.onCategories}
            onTriggerMessage={this.onTriggerMessage}
            onTriggerMessage2={this.onTriggerMessage2}
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
            renderBasket={this.renderBasket}
            renderAddress={this.renderAddress}
            renderHistory={this.renderHistory}
            renderWishlist={this.renderWishlist}
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
    height: 45,
    marginLeft:0,
    marginTop:388,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#eba43b',
    borderWidth: 1,
    borderColor: '#eba43b',
    position: 'absolute',
  },
  screenButton:{
    marginRight:0,
    width:270,
    height: 45,
    marginLeft:0,
    marginTop:0,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#eba43b',
    borderWidth: 1,
    borderRadius: 5,
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
  description: "Dress hijau wanita dengan potongan asimetrik pada bagian bawah.\n\nBahan: 60% Katun, 30% Sutra, 10% Poliester\n\nUkuran: (lingkar dada x pinggang x panjang)\nXS: (70x50x150cm)\nS: (72x52x150cm)\nM: (74x54x152cm)\nL: (76x56x152cm)\nXL: (78x58x154cm)",
  description2: "Email: contact@vilstore.com\nNomor Telepon: 08255528233344\nLokasi: Jakarta",
  description3: "⭐⭐⭐⭐⭐\nVillie                                                      14 Mei 2018\n\nPengirimannya cepat, produk sesuai gambar, ukuran sesuai size chart juga. Top deh! Recommended.",
  images: [
    'https://image.ibb.co/kkaiZS/fotoproduk.jpg',
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

