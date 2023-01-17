import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDGw-0OW6lX1oxF79gcEat4eh7Swgrapy4",
    authDomain: "clone-26b9f.firebaseapp.com",
    projectId: "clone-26b9f",
    storageBucket: "clone-26b9f.appspot.com",
    messagingSenderId: "731609287649",
    appId: "1:731609287649:web:1da8c77d54bb1181e9a0a0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};


  