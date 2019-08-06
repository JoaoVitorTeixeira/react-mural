import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCNzgxJoQZPfk30_MYVJNhqHMUCUZjwL-Q",
    authDomain: "mural-9f0cc.firebaseapp.com",
    databaseURL: "https://mural-9f0cc.firebaseio.com",
    projectId: "mural-9f0cc",
    storageBucket: "",
    messagingSenderId: "1057790076168",
    appId: "1:1057790076168:web:354220fdf6446189"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const database = firebase.database()