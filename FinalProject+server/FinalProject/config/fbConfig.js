
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfPxzfwkjvS3t2YzqaxAWu20v1w8p3MyI",
    authDomain: "react-final-project-3a61a.firebaseapp.com",
    databaseURL: "https://react-final-project-3a61a.firebaseio.com",
    projectId: "react-final-project-3a61a",
    storageBucket: "react-final-project-3a61a.appspot.com",
    messagingSenderId: "231901282071",
    appId: "1:231901282071:web:cda5280f4d827b572f8152"

};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;