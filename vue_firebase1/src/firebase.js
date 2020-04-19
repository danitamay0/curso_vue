import firebase from 'firebase/app'
import firestore from 'firebase/firestore'



const config  = {
    apiKey: "AIzaSyC80PhMCSmS-QogW2IC9E_EDkbGkYmB8A0",
    authDomain: "crud-vue1.firebaseapp.com",
    databaseURL: "https://crud-vue1.firebaseio.com",
    projectId: "crud-vue1",
    storageBucket: "crud-vue1.appspot.com",
    messagingSenderId: "262967129978",
    appId: "1:262967129978:web:a262bb6997a1e4809b08c3",
    measurementId: "G-HL89G5EYVE"
  };

  const firebaseApp= firebase.initializeApp(config);
  firebase.firestore().settings({
     
  });
  export default firebaseApp.firestore();
