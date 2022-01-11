import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

const auth = getAuth(app);

const registerUser = async (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const userCollection = collection(db, 'user-data');
      const userRef = doc(db, 'user-data', user.uid);
      const docRef = await getDoc(userRef);

      setDoc(userRef, {
        name,
      });
      console.log('userCollection', userCollection);
      
      console.log('docRef', docRef.data());
      return user;
    })
    .catch((error) => {
      const { code, message } = error;
      return { error: true, code, message };
    });
};

const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log('userCredential', userCredential);
      const user = userCredential.user;
      const userRef = doc(db, 'user-data', user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        setDoc(userRef, {});
      } else {
        console.log('userDoc', userDoc.data());
      }

      return user;
    })
    .catch((error) => {
      const { code, message } = error;
      return { code, message };
    });
};

export { registerUser, loginUser };
