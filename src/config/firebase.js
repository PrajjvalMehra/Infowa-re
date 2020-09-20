import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCB18BNmi3i5NLABOgP5RFr-HdibAx7Fik",
    authDomain: "infowarereact.firebaseapp.com",
    databaseURL: "https://infowarereact.firebaseio.com",
    projectId: "infowarereact",
    storageBucket: "infowarereact.appspot.com",
    messagingSenderId: "710842307841",
    appId: "1:710842307841:web:c41b767d0d88bb5e097700",
    measurementId: "G-K5CV5NK48M"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

  export default fire;