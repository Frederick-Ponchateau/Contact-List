import React ,{useContext,useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {FirebaseContext} from './FirebaseContext';


import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Secure';

const Stack = createStackNavigator();
const  App=()=> {

  const {auth} = useContext(FirebaseContext);
  const [user, setUser] = useState(null)
  
  useEffect(() => {
  const authChange =  auth.onAuthStateChanged(userAuth=>{
    setUser(userAuth)
      console.log("user : ",userAuth)
     });
    return authChange; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
        {user?
          <Home/>
          :
          <Stack.Navigator>
            <>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="register" component={Register}/>
            </>
          </Stack.Navigator>
        }
    </NavigationContainer>
  );
}
export default App

