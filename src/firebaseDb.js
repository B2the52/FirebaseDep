import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAZQSi0qI0BfDwr9qJlKSF8MbtujYXIedw",
    authDomain: "subscriptions-79651.firebaseapp.com",
    projectId: "subscriptions-79651",
    storageBucket: "subscriptions-79651.appspot.com",
    messagingSenderId: "59218488112",
    appId: "1:59218488112:web:6eed3714facbb9b520f6f5"
};
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();