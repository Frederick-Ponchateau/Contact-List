import React,{useContext} from 'react';
import { View, Text, } from 'react-native';
import {Button } from 'react-native-elements';
import {FirebaseContext} from '../../FirebaseContext';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: 'U_n5Hb1rmoqAatUO5MqjT_Fb',
  });
const index = () => {
    const {auth} = useContext(FirebaseContext);

    const goToHome = async () => {
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);
        const googleCredential = auth().GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
        //navigation.navigate('Home')
    }
    
    return (
        <View>
            <Text>Login</Text>
            <Button 
            title='Home'
            icon={{ name: 'home', color: 'white'} }
            onPress={goToHome}/>
        </View>
    )
}

export default index
