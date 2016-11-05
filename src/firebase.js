import * as firebase from 'firebase';


var app = firebase.initializeApp({
    apiKey: "AIzaSyAAulvVAg78Y-qHpeZ5kYONYWA7_3dHD9k",
    authDomain: "hackatometro-admin.firebaseapp.com",
    databaseURL: "https://hackatometro-admin.firebaseio.com",
    storageBucket: "hackatometro-admin.appspot.com",
    messagingSenderId: "487302627815"
  });
  

export default app;