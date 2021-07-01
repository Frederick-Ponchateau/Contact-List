import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {

        this.auth = auth();
        this.firestore = firestore();
        this.storage = storage();
    }

    // ALL QUERY

    queryUsers = firestore().collection("users");
    queryAddUser =(id,data)=> firestore().collection("users").doc(id).set(data);
    queryUpdateUser =(id,data)=> firestore().collection("users").doc(id).update(data);

    queryContact = firestore().collection("contacts");
    queryAllContact = this.queryContact.orderBy('name','asc');

    queryAddContact = (contact) =>firestore().collection("contacts").add(contact);
    queryDelContact = (id) =>this.queryContact.doc(id).delete();
    queryUpdateContact = (id,data)=>firestore().collection("contacts").doc(id).update(data);

    storageImg = (id,name,uri) =>storage().ref(`images/${id}/${name}`).putFile(uri);
    storageGetImg = (id,name) =>storage().ref(`images/${id}/${name}`).getDownloadURL();
 }

export default Firebase;


