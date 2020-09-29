// import { firestore } from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBgLLWmAWv5f7RIMsuPAP-MZx5DUG29mz0",
    authDomain: "pinktees-a082b.firebaseapp.com",
    databaseURL: "https://pinktees-a082b.firebaseio.com",
    projectId: "pinktees-a082b",
    storageBucket: "pinktees-a082b.appspot.com",
    messagingSenderId: "476295957713",
    appId: "1:476295957713:web:7bedb007ef66715bcb89f0",
    measurementId: "G-YE29W24H32"
  };
  export const fire = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export const storage = firebase.storage();

export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  localStorage.setItem("uid" , userAuth.uid);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

export default fire;