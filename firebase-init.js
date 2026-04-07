import { db } from "./firebase-config.js";
import { ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Exemple : test de connexion
set(ref(db, "test"), { ok: true });
