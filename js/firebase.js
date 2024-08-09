import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore,getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANqDVg-qGYoobThJ3jjaDFJbrXcyAartM",
  authDomain: "coventry-1c817.firebaseapp.com",
  projectId: "coventry-1c817",
  storageBucket: "coventry-1c817.appspot.com",
  messagingSenderId: "331775322826",
  appId: "1:331775322826:web:7ad6020c66822fed1a2233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, getDocs, addDoc, collection }