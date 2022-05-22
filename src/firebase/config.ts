import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,

  authDomain: import.meta.env.VITE_authDomain,

  projectId: import.meta.env.VITE_projectId,

  storageBucket: import.meta.env.VITE_storageBucket,

  messagingSenderId: import.meta.env.VITE_messagingSenderId,

  appId: import.meta.env.VITE_appId,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const usersCollection = collection(db, 'users')

export const auth = getAuth(app);