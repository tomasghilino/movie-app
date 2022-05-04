// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: 'movieapp-8ae08.firebaseapp.com',
  projectId: 'movieapp-8ae08',
  storageBucket: 'movieapp-8ae08.appspot.com',
  messagingSenderId: '488645358024',
  appId: '1:488645358024:web:015b0ce1fec89e25a0d0fd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
