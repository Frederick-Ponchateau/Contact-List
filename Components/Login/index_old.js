import React,{useContext,useState} from 'react';
import { View, Text, } from 'react-native';
import {Button,Input  } from 'react-native-elements';
import {FirebaseContext} from '../../FirebaseContext';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { GoogleSignin ,
//             } from '@react-native-google-signin/google-signin';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from '@react-native-google-signin/google-signin';

    GoogleSignin.configure({});
const index = () => {
    //const {auth} = useContext(FirebaseContext);
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const login = async () =>{
        try{ // Bloc de code
            await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                console.log("userInfo",userInfo);
                setuserInfo({ userInfo });
                setloggedIn(true);
            } 
        catch (error) {
            console.log("error.code",error);
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                } else {
                // some other error happened
                }
        }

    }
    const signOut = async () => {
        try {

          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]); // Remember to remove the user from your app's state as well
          console.log("object",userInfo )
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <View>
            <Text>Login</Text>

            <Input
                placeholder='Email'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                />


            <Input
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={
                <Icon
                name='lock'
                size={24}
                color='black'
                />
            }
            />
            <Button
                onPress={()=> console.log("123")}
                icon={{
                    name: "arrow-right",
                    size: 15,
                    color: "white"
                }}
                title="Connexion"
                />

            <GoogleSigninButton
                style={{ width: 200, height: 60 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={login}
            />
            <Button title="Déconnexion"
                    icon={{name:"logout"}}
                    onPress={signOut}
            />
        </View>
    )
}

export default index
