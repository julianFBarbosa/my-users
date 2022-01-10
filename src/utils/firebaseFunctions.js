import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

const auth = getAuth(app);

const registerUser = async (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userRef = doc(db, 'user', user.uid);
      console.log('userRef', userRef);

      setDoc(userRef, {
        name: 'San Francisco',
        state: 'CA',
        country: 'USA',
        capital: false,
        population: 860000,
        regions: ['west_coast', 'norcal'],
      });
      // setDoc(
      //   userRef,
      //   {
      //     name,
      //   },
      //   {
      //     capital: true,
      //     merge: true,
      //   }
      // );
      return user;
    })
    .catch((error) => {
      const { code, message } = error;
      return { error: true, code, message };
    });
};

const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const { code, message } = error;
      return { code, message };
    });
};

export { registerUser, loginUser };
