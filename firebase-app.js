// Chargement des SDK Firebase (version compat, idéale pour GitHub Pages)
const appScript = document.createElement("script");
appScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js";

const dbScript = document.createElement("script");
dbScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js";

// Quand firebase-app est chargé, on charge firebase-database
appScript.onload = () => {
    document.head.appendChild(dbScript);
};

// Quand firebase-database est chargé, on initialise Firebase + on crée la structure
dbScript.onload = () => {

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
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    console.log("Firebase initialisé ✔️");

    const workspace = "savigny-le-temple";

    // --- CATEGORIES ---
    db.ref(`workspaces/${workspace}/categories`).set({
        ecriture: "Écriture",
        rangement: "Rangement",
        informatique: "Informatique",
        papeterie: "Papeterie",
        nettoyage: "Nettoyage"
    });

    // --- ARTICLES ---
    db.ref(`workspaces/${workspace}/articles`).set({
        id1: {
            nom: "Stylo bleu",
            categorie: "ecriture",
            stock: 12,
            seuil: 5,
            description: "Stylo bille bleu",
            createdBy: "user123",
            createdAt: Date.now()
        },
        id2: {
            nom: "Classeur A4",
            categorie: "rangement",
            stock: 4,
            seuil: 2,
            description: "Classeur cartonné A4",
            createdBy: "user123",
            createdAt: Date.now()
        },
        id3: {
            nom: "Lingettes désinfectantes",
            categorie: "nettoyage",
            stock: 20,
            seuil: 10,
            description: "Lingettes multi-usages",
            createdBy: "user123",
            createdAt: Date.now()
        }
    });

    // --- UTILISATEURS ---
    db.ref(`workspaces/${workspace}/utilisateurs`).set({
        user123: {
            nom: "Fabrice",
            email: "f.gouverneur@savigny-le-temple.fr",
            role: "admin",
            actif: true
        },
        user456: {
            nom: "Agent technique",
            email: "agent@savigny-le-temple.fr",
            role: "utilisateur",
            actif: true
        }
    });

    // --- MOUVEMENTS DE STOCK ---
    db.ref(`workspaces/${workspace}/mouvements`).set({
        mv1: {
            articleId: "id1",
            type: "sortie",
            quantite: 3,
            date: Date.now()
