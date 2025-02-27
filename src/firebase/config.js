import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjVs8fkFcnIpIpaZ-gKWKAZO3xXcqWySk",
  authDomain: "pinterest-a4b72.firebaseapp.com",
  projectId: "pinterest-a4b72",
  storageBucket: "pinterest-a4b72.firebasestorage.app",
  messagingSenderId: "395485513410",
  appId: "1:395485513410:web:818562e4f89ef75e269d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);