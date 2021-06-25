import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Button,Text, Overlay,Input } from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {showModal} from '../../Redux/Actions/modal';
import {AjoutContact} from '../../Redux/Actions/contacts';


const index = () => {

    const {modal , contacts} = useSelector(state => state);
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const toggleOverlay = () => {
        dispatch(showModal({visible:!modal.visible}))
        setName("");
       // setVisible(!modal.visible);
      };
    const handleChangeName = (name) => {
        setName(name);
    }
    const saveName = () => {
        dispatch(AjoutContact(
            {
                id: contacts.length + 1,
                name,
                avatar_url: 'https://img.icons8.com/ios/452/contacts.png',
                subtitle: 'nc'
            }))
        console.log("name",name)
        toggleOverlay();

    }
    
    
    return (
        <Overlay isVisible={modal.visible}
                 onBackdropPress={toggleOverlay}
                 overlayStyle={styles.overlayStyle}>
            <Text style={styles.title} h4>Ajouter un contact !</Text>
            <Input
                placeholder='Ex: Arthur Minimoïse'
                onChangeText={handleChangeName}
                />
                <View style={styles.button}>
                    <Button
                        title="Enregistrer"
                        type="outline"
                        onPress={saveName}
                    />
                </View>

               
        </Overlay>
    )
}

export default index
const styles = StyleSheet.create({
    overlayStyle:{
        width:350,
    },
    title:{ paddingHorizontal:10,
            paddingVertical:30
    
    },
    button:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingBottom:20
    }
})
