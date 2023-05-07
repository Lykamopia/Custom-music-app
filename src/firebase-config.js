import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD0_ba4WroZRvlLqYwwHRnbPZ9GWM_6rB0",
    authDomain: "musical-1c470.firebaseapp.com",
    projectId: "musical-1c470",
    storageBucket: "musical-1c470.appspot.com",
    messagingSenderId: "239712254416",
    appId: "1:239712254416:web:6a2ee53b9824c15f1fa1d5",
    measurementId: "G-MGKDF25BBX"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);