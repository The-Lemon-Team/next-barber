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
  GeoPoint,
} from '@firebase/firestore';
import { Coords } from 'google-map-react';

import { app } from './firebase-admin';
import { env } from '../constants/env';
import { firebaseConfig } from './firebaseConfig';

import {
  IComment,
  ICommonData,
  IFeature,
  IGalleryItem,
  IMainPageData,
  IPriceList,
  IPriceListItem,
  IRawCommonData,
} from '../interfaces';

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebaseApp, {});
const getCollection = (collectionName: string) =>
  collection(firestore, collectionName || '');
const mainPageCollection = getCollection(env.dbPath || '');

console.log(app);

interface IRawData {
  title: string;
  features: DocumentReference[];
  priceList: DocumentReference[];
  comments: DocumentReference[];
  gallery: DocumentReference[];
}

export const getRawMainPage = () =>
  getDoc(doc(mainPageCollection, env.docId)).then((result) => {
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
  getMainDataDoc().then((snapshot) => {
    const snapshotData = snapshot.data() as IRawCommonData;
    const geocode = transformGeocode(snapshotData.geocode);

    return { ...snapshotData, geocode } as ICommonData;
  });

const transformGeocode = (point: GeoPoint): Coords => {
  return {
    lat: point.latitude,
    lng: point.longitude,
  };
};

export const getMainPage = async (): Promise<IMainPageData> => {
  const gallery = await getGalleryData();
  const comments = await getCommentsData();
  const features = await getFeaturesData();
  const priceList = await getPriceListData();
  const commonData = await getCommonData();

  const data = {
    title: 'Barber Andrey',
    features: [
      {
        id: '6oG4wkqF96EEynk1DZuA',
        title: 'Быстро',
        description: 'Мы делаем за две минуты',
      },
      {
        id: 'uwd2Ex7A6Wz8puafkp1O',
        description:
          'НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕННЫЙ СТАТУС?',
        title: 'Дорого',
      },
      {
        id: 'zZ8C617USNrDNACMUpcf',
        title: 'Круто',
        description:
          'ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ, ВНЕШНЕ.',
      },
    ],
    priceList: [
      { id: '5vcLimn7KK9GKKCmbLlr', price: 1000, name: 'Боксерская прическа' },
      { id: '8NUssGzUqjWOiSrdpyq9', price: 900, name: 'Под ноль' },
      { id: 'Apf8XyTxHyFfqAH8K8P0', price: 1000, name: 'Бандитская прическа' },
      { id: 'kNF88SNU2x1mLbaMAIwf', price: 2000, name: 'Усы, борода' },
      { id: 'ldvFBYq7YFcdjtk0527I', price: 1500, name: 'Стильно, круто' },
    ],
    comments: [
      {
        id: 'RkUqVEoQSjqcPR0P6xjV',
        date: '09.10.21',
        text: 'Залетел на пол часа перед съемкой, быстро, качественно, сервис топ! Залечу еще!',
        authorName: 'Юра Дудь',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/755682022018751.jpeg?alt=media&token=1b7df34e-b63a-4b2c-abed-bd10d9c1884f',
      },
      {
        id: 'UnxI5DYhiFq6Fv2hA5Qh',
        authorName: 'Брюс Уиллис',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/persimg38.jpg?alt=media&token=0ace6b15-c69c-4ded-98e8-de7d3d564531',
        text: 'Лысина получилась как надо, зайду еще!',
        date: '15.11.21',
      },
      {
        id: 'WpxOwcuOWPGZY7tvVTRE',
        authorName: 'Мирон Янович',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/3a1cc1445aa16dab0d538e6b5467617c_large%20(1).jpg?alt=media&token=1f98e1ba-9b71-4e9e-9b9f-69f6910efd09',
        date: '10.11.21',
        text: 'Новая прическа вдохновила на создание альбома, спасибо барберу за победу!',
      },
      {
        id: 'crguGSGeteRe6YL5veaa',
        date: '08.09.21',
        text: 'Ничего себе, усы и борода были готовы всего за час, успел зайти перед собеседованием купить кваса!',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/image-1-242x242.jpeg?alt=media&token=6f760697-d5fe-48de-9f04-e13e91c62415',
        authorName: 'Микола Кожемяка',
      },
      {
        id: 'hlSBbwo2ffs6HoXr2aqs',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/938_icon_128.jpg?alt=media&token=f4aff631-a234-4ec5-90b4-20d93e142012',
        date: '10.10.21',
        text: 'Сделано все быстро и четко, сразу вылетел в Барселону рассказать корешам',
        authorName: 'Дэвид Бэкхем',
      },
      {
        id: 'ywgFClzUFxYiWlOZG7Uo',
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/460x300_0_ff12af428026e795c5d53b41e23d9c04%40496x323_0xd42ee430_9103670171422012577.jpeg?alt=media&token=1d973e42-1573-4b1f-b399-37fb67245911',
        date: '01.01.21',
        authorName: 'Райн Гослинг',
        text: 'Превратили в мужчину, быстро, модно, молодежно. Барбер волшебник, я думал не получится!',
      },
    ],
    gallery: [
      {
        id: '3VUDia0ClEXaYp16WPgB',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_6779.jpeg?alt=media&token=7f77a6bf-1e42-4f75-b9cd-86b707c001b3',
      },
      {
        id: '437yc6Pth9I96nCfB0VY',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_4904.jpg?alt=media&token=d1411626-8279-4fce-87b4-1163e2d6caec',
      },
      {
        id: '6kb77uqjhEg7Z6HPVILc',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_4697.jpg?alt=media&token=6b31a2c8-26fa-4287-ab58-592fa6b07b6f',
      },
      {
        id: 'LmFchWWaYuSisMiIV6ol',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_6328.jpeg?alt=media&token=a68f1f6a-b106-40a5-8fe4-d11be0100ff7',
      },
      {
        id: 'RHYxmRdTPE3IXfGzYenp',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_6352.jpeg?alt=media&token=81f73b00-a5b1-4efa-9161-76ee9e175595',
      },
      {
        id: 'iqu2OKut2z8KJsL4m2pg',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_5696.jpg?alt=media&token=88eefad0-ef5d-4d40-8f24-a9f5b159924d',
      },
      {
        id: 'y9PQjXTfgpgcs7YHB4HY',
        imageSrc:
          'https://firebasestorage.googleapis.com/v0/b/lemon-barber.appspot.com/o/gallery%2FIMG_4056.jpeg?alt=media&token=6e08df40-4ac1-465a-b64b-2dd9bb069bc6',
      },
    ],
  };

  return {
    gallery,
    comments,
    features,
    priceList,
    ...commonData,
  };
};
