// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4xyj75aCMt4p9yMdzW2xFZIx59g7DlmQ",
  authDomain: "gestifournitures.firebaseapp.com",
  databaseURL: "https://gestifournitures-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gestifournitures",
  storageBucket: "gestifournitures.firebasestorage.app",
  messagingSenderId: "857827909082",
  appId: "1:857827909082:web:1ecc8775bccb605534b4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);