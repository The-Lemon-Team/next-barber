import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  collection,
  doc,
  getDoc,
  DocumentReference,
  getDocs,
  query,
  QuerySnapshot,
  DocumentData,
} from '@firebase/firestore';

import { variables } from './variables';

import {
  IComment,
  ICommonData,
  IFeature,
  IGalleryItem,
  IMainPageData,
  IPriceList,
  IPriceListItem,
} from '../interfaces';

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
const getCollection = (collectionName: string) =>
  collection(firestore, collectionName || '');
const mainPageCollection = getCollection(variables.dbPath || '');

interface IRawData {
  title: string;
  features: DocumentReference[];
  priceList: DocumentReference[];
  comments: DocumentReference[];
  gallery: DocumentReference[];
}

export const getRawMainPage = () =>
  getDoc(doc(mainPageCollection, variables.docId)).then((result) => {
    return result.data() as IRawData;
  });

export const getPriceListDocs = () =>
  getDocs(query(getCollection('price-list')));
const getFeatureDocs = () => getDocs(query(getCollection('features')));
const getCommentDocs = () => getDocs(query(getCollection('comments')));
const getGalleryDocs = () => getDocs(query(getCollection('gallery')));
const getMainDataDoc = () => getDoc(doc(mainPageCollection, 'common'));

const resolveDocs =
  <Type, Result = Type & { id: string }>(
    request: () => Promise<QuerySnapshot<DocumentData>>,
  ): (() => Promise<Result[]>) =>
  () =>
    request().then(
      (snapshot) =>
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Type, 'id'>),
        })) as unknown as Array<Result>,
    );

const getPriceListData: () => Promise<IPriceList> =
  resolveDocs<IPriceListItem>(getPriceListDocs);
const getFeaturesData: () => Promise<IFeature[]> =
  resolveDocs<IFeature>(getFeatureDocs);
const getCommentsData: () => Promise<IComment[]> =
  resolveDocs<IComment>(getCommentDocs);
const getGalleryData: () => Promise<IGalleryItem[]> =
  resolveDocs<IGalleryItem>(getGalleryDocs);
const getCommonData: () => Promise<ICommonData> = () =>
  getMainDataDoc().then((snapshot) => snapshot.data() as ICommonData);

export const getMainPage = async (): Promise<IMainPageData> => {
  const gallery = await getGalleryData();
  const comments = await getCommentsData();
  const features = await getFeaturesData();
  const priceList = await getPriceListData();
  const commonData = await getCommonData();

  return {
    ...commonData,
    gallery,
    comments,
    features,
    priceList,
  };
};
