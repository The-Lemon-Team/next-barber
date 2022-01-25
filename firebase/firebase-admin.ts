import admin from 'firebase-admin';
import flamelink from 'flamelink';
// const serviceAccount = require('path/to/serviceAccountKey.json');

import { firebaseConfig } from './firebaseConfig';

const firebaseApp = admin.initializeApp(firebaseConfig);

export const app = flamelink({ firebaseApp, isAdminApp: true }); // Remember `isAdminApp: true` here!!!
