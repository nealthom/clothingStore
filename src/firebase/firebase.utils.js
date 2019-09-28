import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZ60X1-j7y5-28VR6hOH6ovbISDBl_TdQ",
  authDomain: "storeexample-4c204.firebaseapp.com",
  databaseURL: "https://storeexample-4c204.firebaseio.com",
  projectId: "storeexample-4c204",
  storageBucket: "",
  messagingSenderId: "829060012399",
  appId: "1:829060012399:web:3fd87a23adfbd21036b09a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
