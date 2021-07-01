import React ,{useContext,useEffect,useState} from 'react';
import { StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {FirebaseContext} from './FirebaseContext';

import {AjoutContact,DeleteContact,UpdateContact } from './Redux/Actions/contacts';
import {useDispatch,useSelector} from 'react-redux';

import Header from './Components/Header';
import Contact from './Components/Contact';
import  Fab  from './Components/Fab';
import Modal from './Components/Modal';
import Login from './Components/Login';


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
const Stack = createStackNavigator();

const  App=()=> {
  const {auth} = useContext(FirebaseContext);
  const [user, setUser] = useState(null)
  useEffect(() => {
    const authChange = auth().onAuthStateChanged(user=>{
      console.log("user",user)
    });
    return authChange; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user?<Stack.Screen name="Home" component={Home} />:<Stack.Screen name="Login" component={Login} />}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Home = () => {
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

export default App

const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
},})
