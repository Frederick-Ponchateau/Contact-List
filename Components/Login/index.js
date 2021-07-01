import React,{useState,useContext} from 'react';
import { View, Text } from 'react-native';
import {Button,Input} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import {FirebaseContext} from '../../FirebaseContext';

const index = ({navigation}) => {
    const {auth} = useContext(FirebaseContext)
    
    const [email, setEmail] = useState("f.p.n.97230@gmail.com");
    const [password, setPassword] = useState("123456");
    const connexion = () => {
        try{
            auth.signInWithEmailAndPassword(email,password)
            console.log("connexion",email,auth);
        }catch(eror) {
            console.log(eror);
        }
    }
    const logOut = () => {
        
        auth.signOut();

    }
    

    return (
        <View>
            <Input
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
            />
            <Input
                placeholder='Mot de passe'
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <Button
            buttonStyle={{marginBottom:50 ,width:150,}}
                title="Connexion"
                onPress={connexion}
            />
           
            <Button
                title="Inscription"
                onPress={()=>navigation.navigate('register')}
            />
            <Button
                title="Déconnexion"
                onPress={logOut}
            />
        </View>
    )
}

export default index
