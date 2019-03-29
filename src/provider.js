import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCAWFEcaLNXcpu29BMRK0uu3qCNb42rzfA",
    authDomain: "burgerqueen-d8eb9.firebaseapp.com",
    databaseURL: "https://burgerqueen-d8eb9.firebaseio.com",
    projectId: "burgerqueen-d8eb9",
    storageBucket: "burgerqueen-d8eb9.appspot.com",
    messagingSenderId: "1084011087831"
  };
  firebase.initializeApp(config);
  
 export const database=firebase.database()