// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Bzb717VCa_F1OJ7UsAgvuMRD43p0sB0",
  authDomain: "fb-clone-58291.firebaseapp.com",
  projectId: "fb-clone-58291",
  storageBucket: "fb-clone-58291.appspot.com",
  messagingSenderId: "326659354766",
  appId: "1:326659354766:web:1d742bba65a702578b19df",
  measurementId: "G-47SLHGDBQS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
