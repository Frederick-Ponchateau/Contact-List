import React from 'react';
import {Text, View } from 'react-native';
import styles from './styles';
import { Button,ListItem, Avatar } from 'react-native-elements';


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const ContactItem = ({ item }) => (
    <ListItem.Swipeable bottomDivider
    rightContent={
      <Button
        title="Supprimer"
        icon={{ name: 'delete', color: 'white' }}
        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
      />
    }
  >
    
    
        <Avatar source={{uri: item.avatar_url}} />
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem.Swipeable>
      );
   

export default ContactItem
