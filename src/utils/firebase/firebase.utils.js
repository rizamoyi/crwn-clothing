import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrB0K-Pwyij_XPmyiBsL8mkfGz1jxVGIw',
  authDomain: 'crwn-clothing-db-f8fc4.firebaseapp.com',
  projectId: 'crwn-clothing-db-f8fc4',
  storageBucket: 'crwn-clothing-db-f8fc4.appspot.com',
  messagingSenderId: '378522527078',
  appId: '1:378522527078:web:b80e46cfc1905316dc94a7',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
