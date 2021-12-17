import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  collection,
  doc,
  getDoc,
  DocumentReference,
} from '@firebase/firestore';

import { variables } from './variables';
import {
  IComment,
  IFeature,
  IMainPageData,
  IPriceListItem,
} from '../interfaces/IMainPageData';

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
  priceList: DocumentReference[];
  comments: DocumentReference[];
}

export const getRawMainPage = () =>
  getDoc(docRef).then((result) => {
    return result.data() as IRawData;
  });

export const getMainPage = (): Promise<IMainPageData> =>
  getRawMainPage().then(({ features, title, priceList, comments }) => {
    const featureDocs = features.map((docRef) =>
      getDoc(docRef).then((result) => result.data() as IFeature),
    );
    const priceListDocs = priceList.map((docRef) =>
      getDoc(docRef).then((result) => result.data() as IPriceListItem),
    );
    const commentsDocs = comments.map((docRef) =>
      getDoc(docRef).then((result) => result.data() as IComment),
    );

    return Promise.all([
      Promise.all(featureDocs),
      Promise.all(priceListDocs),
      Promise.all(commentsDocs),
    ]).then(([features, priceList, comments]) => ({
      comments,
      features,
      priceList,
      title,
    }));
  });
