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





export const createUserProfile= async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}/`);
    
    const snapshot= await userRef.get();
    console.log(Object.keys(snapshot))

    console.log(snapshot)
    if(!snapshot.exists){
        const {displayName, email}=userAuth;

        const createdAt= new Date();


        try{
            await userRef.set({
                
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){

            alert(error.message)


        }
    }

return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
 