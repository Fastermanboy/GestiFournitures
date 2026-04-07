// Chargement des SDK Firebase (version compat, plus simple à utiliser)
const appScript = document.createElement("script");
appScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js";

const dbScript = document.createElement("script");
dbScript.src = "https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js";

// Quand les deux scripts sont chargés, on initialise Firebase
appScript.onload = () => {
  document.head.appendChild(dbScript);
};

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
    informatique: "Informatique"
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
      date: Date.now() - 3600000,
      userId: "user456"
    },
    mv2: {
      articleId: "id1",
      type: "entree",
      quantite: 10,
      date: Date.now(),
      userId: "user123"
    }
  });

  // --- DEMANDES ---
  db.ref(`workspaces/${workspace}/demandes`).set({
    dm1: {
      userId: "user456",
      articleId: "id2",
      quantite: 2,
      statut: "en-attente",
      date: Date.now()
    }
  });

  console.log("Structure complète créée dans Firebase ✔️");
};

// On injecte le premier script (le second sera injecté dans onload)
document.head.appendChild(appScript);
