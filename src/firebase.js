import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDcOJ3j_Oe3z4h-bl8yoRK0_i8yqgg1qlU",
    authDomain: "chattybox-d716f.firebaseapp.com",
    projectId: "chattybox-d716f",
    storageBucket: "chattybox-d716f.appspot.com",
    messagingSenderId: "146259877161",
    appId: "1:146259877161:web:7c6b2a85e4bd96a221ab38"
  }).auth();

