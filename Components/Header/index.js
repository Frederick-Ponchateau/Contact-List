import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header as Header2 } from 'react-native-elements';

const Header = () => {
    return (
                   <Header2
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'CONTACT', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        elevated={true}
        backgroundColor={"red"}
      />
    )
}

export default Header

const styles = StyleSheet.create({})
