import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "crypto-auth-c676a.firebaseapp.com",
  projectId: "crypto-auth-c676a",
  storageBucket: "crypto-auth-c676a.appspot.com",
  messagingSenderId: "430401964517",
  appId: "1:430401964517:web:bbb070e9b26619bef5070c"
};

// Initialize Firebase
const firebaseDB=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth};
export default firebaseDB.database().ref();

