import React,{useState,useContext} from 'react';
import { View, Text } from 'react-native';
import {Button,Input} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import {FirebaseContext} from '../../FirebaseContext';

const index = ({navigation}) => {
    const {auth,queryAddUser} = useContext(FirebaseContext)
    
    
    const [email, setEmail] = useState("f.p.n.97230@gmail.com");
    const [password, setPassword] = useState("123456");
/**
 *   const register = async () => {
 *      try{     const {user} =await. auth.createUserWithEmailAndPassword(email,password)
 *              await queryAddUser(user.uid,{email:user.email})
 * }catch(err){
 * console.log(err)}}
 */


    const register = () => {
        try{
            auth.createUserWithEmailAndPassword(email,password)
            .then(async ({user}) =>{
               await queryAddUser(user.uid,{email:user.email, date:Date.now()});
            }).catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }
            
                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }
            
                console.error(error);
              });
                
           // console.log("connexion",auth);
        }catch(eror) {
            console.log(eror);
        }
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
                title="Inscription"
                onPress={register}
            />
           
            <Button
                title="Connexion"
                onPress={()=>navigation.navigate('Login')}
            />
            
        </View>
    )
}

export default index
