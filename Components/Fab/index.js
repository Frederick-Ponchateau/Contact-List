import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {showModal} from '../../Redux/Actions/modal';


const index = () => {

    const {modal} = useSelector(state => state);
    const dispatchModal = useDispatch();
   const open = () => {
        dispatchModal(showModal({visible:!modal.visible}))
   }
   
    return (
        <FAB 
            title="" 
            color={"red"}
            placement={'right'}
            size="large"
            icon={
                <Icon
                  name="plus"
                  size={20}
                  color="white"
                />}
            onPress={open}
            visible={!modal.visible}
             />
    )
}

export default index

const styles = StyleSheet.create({})
