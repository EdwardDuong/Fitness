import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB224BCXfAAyfLquXseU9tj_vxWvQY1fU4",
  authDomain: "nutrition-centre-44f5d.firebaseapp.com",
  databaseURL:
    "https://nutrition-centre-44f5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nutrition-centre-44f5d",
  storageBucket: "nutrition-centre-44f5d.appspot.com",
  messagingSenderId: "140678188918",
  appId: "1:140678188918:web:24975f2bd66952395d3457",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
