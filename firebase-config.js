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

import { db } from "./firebase-config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const workspace = "savigny-le-temple";

// Création des catégories
set(ref(db, `workspaces/${workspace}/categories`), {
  ecriture: "Écriture",
  rangement: "Rangement",
  informatique: "Informatique"
});

// Exemple de fournitures
set(ref(db, `workspaces/${workspace}/fournitures/id1`), {
  nom: "Stylo bleu",
  categorie: "ecriture",
  stock: 12,
  seuil: 5,
  description: "Stylo bille bleu"
});

set(ref(db, `workspaces/${workspace}/fournitures/id2`), {
  nom: "Classeur A4",
  categorie: "rangement",
  stock: 4,
  seuil: 2,
  description: "Classeur cartonné A4"
});
