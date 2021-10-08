import { initializeApp } from 'firebase/app';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const firestore = getFirestore();
export const auth = getAuth();


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, `users`, `${userAuth.uid}`);
    const snapshot = await getDoc(userRef)
    console.log(snapshot)
    if (!snapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log("error creating user", e)
        }
    }

    return userRef;
}