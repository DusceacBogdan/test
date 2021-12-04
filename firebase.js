// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQUwZ1yOC2FNbAAeiR3KeWLCWTK41U4OU",
  authDomain: "polihack-8e85c.firebaseapp.com",
  databaseURL: "https://polihack-8e85c-default-rtdb.firebaseio.com",
  projectId: "polihack-8e85c",
  storageBucket: "polihack-8e85c.appspot.com",
  messagingSenderId: "613493913771",
  appId: "1:613493913771:web:6b6cc5a1335bee1766dfee",
  measurementId: "G-LLF2CTVWF3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth, firebase };

