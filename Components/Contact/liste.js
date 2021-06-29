import React from 'react';
import { View, FlatList, Text} from 'react-native';
import ContactItem from './contactItem';
import {useSelector} from 'react-redux';



const Liste = () => {
  const {contacts} = useSelector(state => state)
  

 
  return (
   
      <FlatList
        data={contacts}
        renderItem={({item})=> <ContactItem item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={()=> <Text>Vous n'avez pas de contact</Text>  }
      />

  );
}



export default Liste;