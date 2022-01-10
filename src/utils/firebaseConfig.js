// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import credentials from './firebaseCredentials.json';

const app = initializeApp(credentials, 'my-users');
const db = getFirestore(app);

export { app, db };
