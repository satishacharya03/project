import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvRp0YDna592hV396gRjyBgzwkoli2XvY",
  authDomain: "sujan-game-package.firebaseapp.com",
  projectId: "sujan-game-package",
  storageBucket: "sujan-game-package.firebasestorage.app",
  messagingSenderId: "885496572074",
  appId: "1:885496572074:web:9112f7f057dbbdd8a448d3",
  measurementId: "G-CVQSF9KCGW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);