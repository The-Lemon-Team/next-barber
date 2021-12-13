import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  collection,
  doc,
  getDoc,
} from '@firebase/firestore';

import { variables } from './variables';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: variables.apiKey,
  authDomain: variables.authDomain,
  projectId: variables.projectId,
  storageBucket: variables.storageBucket,
  messagingSenderId: variables.messagingSenderId,
  appId: variables.appId,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebaseApp, {});
const mainPageCollection = collection(firestore, variables.dbPath || '');
const docRef = doc(mainPageCollection, variables.docId);

export const getMainPage = () => getDoc(docRef).then((result) => result.data());
