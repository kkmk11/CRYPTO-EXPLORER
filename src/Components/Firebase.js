import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyALs9pampu0IS7sOklvrZs-QjwfpX3Wmj8",
  authDomain: "crypto-auth-c676a.firebaseapp.com",
  projectId: "crypto-auth-c676a",
  storageBucket: "crypto-auth-c676a.appspot.com",
  messagingSenderId: "430401964517",
  appId: "1:430401964517:web:bbb070e9b26619bef5070c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth};
export default db;

