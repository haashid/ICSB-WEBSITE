import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNhBg3mJ0fp5Sckfagl4OxJSWVYJW_4Po",
    authDomain: "icsb-46b6b.firebaseapp.com",
    projectId: "icsb-46b6b",
    storageBucket: "icsb-46b6b.firebasestorage.app",
    messagingSenderId: "554712467308",
    appId: "1:554712467308:web:c62c8fcd0e6dd94ca91549",
    measurementId: "G-H2FR1524MD"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
