import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8-WlKMWuAJaXouDNY6eaPS1WbPxaqNFU",
    authDomain: "run-clothing.firebaseapp.com",
    databaseURL: "https://run-clothing.firebaseio.com",
    projectId: "run-clothing",
    storageBucket: "run-clothing.appspot.com",
    messagingSenderId: "102346157126",
    appId: "1:102346157126:web:ce583cfed1e47983b26e47"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
