import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import NavBar, { NavTitle, NavButton, NavButtonText } from 'react-native-nav';

const styles = StyleSheet.create({
  
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

export default function NavBarCustom() {
  return (
	  <NavBar style={styles}>
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
	    <NavTitle style={styles.title}>
	      {"     Dian"}
	    </NavTitle>
	   	<NavButton />
	   	<NavButton />
		<NavButton />
		<NavButton />
		<NavButton />
		<NavButton />
		<NavButton />
	    <NavButton style={styles.navButton}>
	      <Image style={styles.image}
	        resizeMode={"contain"}
	        source={require('./shared/static/ic_search_white.png')}
	      />
	    </NavButton>
	    <NavButton style={styles.navButton}>
	      <Image style={styles.image}
	        resizeMode={"contain"}
	        source={require('./shared/static/ic_settings_white.png')}
	      />
	    </NavButton>
	  </NavBar>
  );
}