import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ваша конфігурація Firebase з .env.local або вставлена напряму
const firebaseConfig = {
    apiKey: "AIzaSyBabYX6W9jkS_c_q8zNkrJenQz3mjZRmw8",
    authDomain: "avanfish-eafbf.firebaseapp.com",
    projectId: "avanfish-eafbf",
    storageBucket: "avanfish-eafbf.firebasestorage.app",
    messagingSenderId: "540890721285",
    appId: "1:540890721285:web:1e13439a5ddd2b5d95006c"
};

// Ініціалізація Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };