import React,{useContext} from 'react';
import {Text, View } from 'react-native';
import styles from './styles';
import { Button,ListItem, Avatar ,Icon} from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';
import {FirebaseContext} from '../../FirebaseContext';
import { AjoutFavory } from '../../Redux/Actions/contacts';





const Item = ({ title }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  
  const ContactItem = ({ item}) => {
    const {queryDelContact,queryUpdateContact} = useContext(FirebaseContext)
    const {contacts} = useSelector(state => state);
    const dispatch = useDispatch();

    const suppContact = (id) => {
      console.log("supp : ",id)
      queryDelContact(id)
    }
   const favory = (id) => {
     queryUpdateContact(item.id,{favoris:!item.favoris})
     
     }
   const color = item.favoris?'#b9ff03': 'blue';
   
   
    return(

    <ListItem.Swipeable bottomDivider
    rightContent={
      <Button
        title="Supprimer"
        icon={{ name: 'delete', color: 'white' }}
        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        onPress={()=>suppContact(item.id)}
        />
      }
      
  >
    
    
        <Avatar source={{uri: item.avatar_url}} />
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon
        name='star' 
        color={color}
          onPress={()=> favory(item.id)}
        />
    </ListItem.Swipeable>
      )};
   

export default ContactItem
