import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2R9Et3DY9kibl2FVpWgSnBx8TVwNVBT4",
    authDomain: "site-3688c.firebaseapp.com",
    projectId: "site-3688c",
    storageBucket: "site-3688c.appspot.com",
    messagingSenderId: "709496681566",
    appId: "1:709496681566:web:b8cab2b40ef44cf59e30cf",
    measurementId: "G-35YX3WJEPY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth}; 