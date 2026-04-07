// Chargement des SDK Firebase hébergés localement via CDN (sans modules)
const firebaseAppScript = document.createElement("script");
firebaseAppScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
document.head.appendChild(firebaseAppScript);

const firebaseDatabaseScript = document.createElement("script");
firebaseDatabaseScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
document.head.appendChild(firebaseDatabaseScript);

// Quand Firebase est chargé, on initialise
firebaseDatabaseScript.onload = () => {

    // --- CONFIG FIREBASE ---
    const firebaseConfig = {
        apiKey: "AIzaSyD4xyj75aCMt4p9yMdzW2xFZIx59g7DlmQ",
        authDomain: "gestifournitures.firebaseapp.com",
        databaseURL: "https://gestifournitures-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "gestifournitures",
        storageBucket: "gestifournitures.appspot.com",
        messagingSenderId: "857827909082",
        appId: "1:857827909082:web:1ecc8775bccb605534b4e3"
    };

    // --- INITIALISATION ---
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    console.log("Firebase initialisé ✔️");

    const workspace = "savigny-le-temple";

    // --- CRÉATION DES CATÉGORIES ---
    db.ref(`workspaces/${workspace}/categories`).set({
        ecriture: "Écriture",
        rangement: "Rangement",
        informatique: "Informatique"
    });

    // --- FOURNITURE 1 ---
    db.ref(`workspaces/${workspace}/fournitures/id1`).set({
        nom: "Stylo bleu",
        categorie: "ecriture",
        stock: 12,
        seuil: 5,
        description: "Stylo bille bleu"
    });

    // --- FOURNITURE 2 ---
    db.ref(`workspaces/${workspace}/fournitures/id2`).set({
        nom: "Classeur A4",
        categorie: "rangement",
        stock: 4,
        seuil: 2,
        description: "Classeur cartonné A4"
    });

    console.log("Structure créée dans Firebase ✔️");
};
