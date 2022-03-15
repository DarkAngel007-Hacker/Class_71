import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC9Siei2fWWmC3kBRTsmiFtFaKBZKeh0Ws",
    authDomain: "e-library-363c9.firebaseapp.com",
    projectId: "e-library-363c9",
    storageBucket: "e-library-363c9.appspot.com",
    messagingSenderId: "188856235128",
    appId: "1:188856235128:web:1c5dda361193a48260e98d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();