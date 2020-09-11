import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAFds8JDXS1nj8uIhi4zWRb6_se_6yRqbw",
  authDomain: "ecommerce-app-54795.firebaseapp.com",
  databaseURL: "https://ecommerce-app-54795.firebaseio.com",
  projectId: "ecommerce-app-54795",
  storageBucket: "ecommerce-app-54795.appspot.com",
  messagingSenderId: "783437833036",
  appId: "1:783437833036:web:300b071f912180506325e9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
