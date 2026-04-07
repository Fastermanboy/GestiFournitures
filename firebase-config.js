// Import Firebase v9+
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "gestifournitures.firebaseapp.com",
  databaseURL: "https://gestifournitures-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gestifournitures",
  storageBucket: "gestifournitures.appspot.com",
  messagingSenderId: "857827909082",
  appId: "1:857827909082:web:1ecc8775bccb605534b4e3"
};

// Initialisation Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
