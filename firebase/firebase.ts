import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  collection,
  doc,
  getDoc,
  DocumentReference,
} from '@firebase/firestore';

import { variables } from './variables';
import { IFeature, IMainPageData } from '../interfaces/IMainPageData';

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

interface IRawData {
  title: string;
  features: DocumentReference[];
}

export const getRawMainPage = () =>
  getDoc(docRef).then((result) => {
    return result.data() as IRawData;
  });

export const getMainPage = () =>
  getRawMainPage().then(({ features, title }) => {
    const featureDocs = features.map((docRef) =>
      getDoc(docRef).then((result) => result.data() as IFeature),
    );

    return Promise.all(featureDocs).then((features: IFeature[]) => ({
      features,
      title,
    }));
  });
