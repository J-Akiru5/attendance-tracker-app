import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCh5P10H-KbP_TN28l722SFwixNuLlilkI",
  authDomain: "attendance-tracker-app-804fe.firebaseapp.com",
  projectId: "attendance-tracker-app-804fe",
  storageBucket: "attendance-tracker-app-804fe.firebasestorage.app",
  messagingSenderId: "44754632357",
  appId: "1:44754632357:web:54460b66884ac1d5d1574c",
  measurementId: "G-EH9E8BXQYC"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});