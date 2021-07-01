import React,{useContext,useState} from 'react';
import {Text, View,ActivityIndicator } from 'react-native';
import styles from './styles';
import { Button,ListItem, Avatar ,Icon} from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';
import {FirebaseContext} from '../../FirebaseContext';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';





const Item = ({ title }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  
  const ContactItem = ({ item}) => {
    const {queryDelContact,queryUpdateContact,storageImg,storageGetImg} = useContext(FirebaseContext)
    const dispatch = useDispatch();

    const suppContact = (id) => {
      queryDelContact(id)
    }
    const favory = () => {
     queryUpdateContact(item.id,{favoris:!item.favoris})
     
     }
    const [loading, setLoading] = useState(false)
    const color = item.favoris?'#b9ff03': 'blue';

    const editImg = () => {
      console.log("object",item.id);
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchCamera(options, (response) => {
        console.log('Response = ', response);
        if (response.assets!=undefined ) {
         setLoading(true)
         //Bloc de code
         const {uri} = response.assets[0] ;
         console.log("uri : ",uri);
         storageImg(item.id,"name.jpg",uri).then(res=>{
          console.log(res);
          storageGetImg(item.id,"name.jpg").then(url => {
            queryUpdateContact(item.id,{
              avatar_url: url
            })
           setLoading(false)
            
          })
        }

         )
      }
     })
    }
    
   
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
    
    
        {loading? <ActivityIndicator color="#eb3300" />:<Avatar 
              source={{uri: item.avatar_url}}
              onPress={editImg} />}
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon
        name='star' 
        color={color}
          onPress={()=> favory()}
        />
    </ListItem.Swipeable>
      )};
   

export default ContactItem
