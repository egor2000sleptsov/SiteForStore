import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDuwkh2DJ3Wqf8QC-57LWh4NmwQAIBk_9U",
    authDomain: "siteforstore.firebaseapp.com",
    projectId: "siteforstore",
    storageBucket: "siteforstore.appspot.com",
    messagingSenderId: "214067068573",
    appId: "1:214067068573:web:8810ecc1744629567a5e74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase