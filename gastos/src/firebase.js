import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKIVwdz4SzxnNINxmndgbKUl1etM4t1gk",
  authDomain: "gastos-leo-vale.firebaseapp.com",
  projectId: "gastos-leo-vale",
  storageBucket: "gastos-leo-vale.firebasestorage.app",
  messagingSenderId: "435690955387",
  appId: "1:435690955387:web:e61b4602d399cc9f9bf8de",
  databaseURL: "https://gastos-leo-vale-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
