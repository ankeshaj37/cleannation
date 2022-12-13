import firebase from 'firebase/compat/app'
import  'firebase/compat/auth';
import  'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs_IGt1CHHOYHD9HnUCucttbN0cy80oZ4",
  authDomain: "cleannation-cc117.firebaseapp.com",
  databaseURL: "https://cleannation-cc117-default-rtdb.firebaseio.com",
  projectId: "cleannation-cc117",
  storageBucket: "cleannation-cc117.appspot.com",
  messagingSenderId: "672818664012",
  appId: "1:672818664012:web:4ac2894146231b260edae9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebaseApp.firestore()

export  {auth,db}