import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCegoBGwWVhTq3vMfN2GW7ArkrUGSbt260",
  authDomain: "crown-db-e6f67.firebaseapp.com",
  databaseURL: "https://crown-db-e6f67.firebaseio.com",
  projectId: "crown-db-e6f67",
  storageBucket: "crown-db-e6f67.appspot.com",
  messagingSenderId: "679193711638",
  appId: "1:679193711638:web:e6e41b716dbd3689"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
