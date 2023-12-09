import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvnJCG2STzf8YxJfh_k_3x3oGd3yOmbso",
  authDomain: "fir-auth-1010.firebaseapp.com",
  projectId: "fir-auth-1010",
  storageBucket: "fir-auth-1010.appspot.com",
  messagingSenderId: "582601725255",
  appId: "1:582601725255:web:51848ab374ec55eb8b2862",
  measurementId: "G-V1TDT8C61P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth };