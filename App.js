import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView} from 'react-native';
import Header from './Components/Header';
import Contact from './Components/Contact';
import  Fab  from './Components/Fab';
import Modal from './Components/Modal';


const App = () => {
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
