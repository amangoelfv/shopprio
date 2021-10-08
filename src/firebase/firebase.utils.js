import { initializeApp } from 'firebase/app';

/* import firestore from 'firebase/firestore';
 */
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvNNicBLs94037znmCWez7HTGBltoVttU",
    authDomain: "shoppr-io.firebaseapp.com",
    projectId: "shoppr-io",
    storageBucket: "shoppr-io.appspot.com",
    messagingSenderId: "312752040825",
    appId: "1:312752040825:web:258bf06e7775ccba099da8",
    measurementId: "G-MVDWLT9M4C"
}

const app = initializeApp(config);
/* 
export const auth = auth;
export const firestore = firestore; */
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);