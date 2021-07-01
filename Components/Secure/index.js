import React,{useContext,useEffect,useState}  from 'react';
import { StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {FirebaseContext} from '../../FirebaseContext';
import {useDispatch} from 'react-redux';
import {AjoutContact,DeleteContact,UpdateContact } from '../../Redux/Actions/contacts';

import Header from '../Header';
import Contact from '../Contact';
import  Fab  from '../Fab';
import Modal from '../Modal';
import Compte from '../Compte';
import Detail from '../Detail';

const initContacts = (queryAllContact,dispatch) => {
    queryAllContact.onSnapshot((snapshot)=>{
      
    
      return snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            dispatch(AjoutContact({id : change.doc.id,
                                  ...change.doc.data()}
            ))
              console.log("New city: ", change.doc.data());
          }
          if (change.type === "modified") {
            dispatch(UpdateContact({id : change.doc.id,
                                    ...change.doc.data()}))
              console.log("Modified city: ", change.doc.data());
          }
          if (change.type === "removed") {
            dispatch(DeleteContact(change.doc.id))
             // console.log("Removed ciy: ", change.doc.id);
  
          }
      });
    })
  }
    const Tab = createBottomTabNavigator();
    const HomeStack = createStackNavigator();

    const HomeStackScreen = () => {
      return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
      );
    }
const Home = ({navigation}) => {
    const {queryAllContact} = useContext(FirebaseContext)
    const dispatch = useDispatch();

//console.log(queryContact);
useEffect(() => {
//init contact 
const unSubContacts = initContacts(queryAllContact,dispatch) ;


return () => {
  unSubContacts
}
}, [])
return (
<SafeAreaView style={styles.container}>
  <Header/>
  <Contact/>
  <Fab/>
  <Modal/>

</SafeAreaView>
)
}
const index = () => {

return (

    <>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Compte" component={Compte} />
        
    </Tab.Navigator>
    </>
)
}

export default index
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },})
  