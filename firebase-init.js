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
