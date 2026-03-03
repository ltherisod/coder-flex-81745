// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//  apiKey: import.meta.env.VITE_API_KEY,
//apiKey: "AIzaSyAGrPKjFHtJyzAdWlGc9gDmAKvZ8FeSJ2Q",
const firebaseConfig = {
  apiKey: "AIzaSyAGrPKjFHtJyzAdWlGc9gDmAKvZ8FeSJ2Q",
  authDomain: "coder-flex-81745.firebaseapp.com",
  projectId: "coder-flex-81745",
  storageBucket: "coder-flex-81745.firebasestorage.app",
  messagingSenderId: "854653941035",
  appId: "1:854653941035:web:6251a34e338f21e114016e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//obtener la base de datos
export const db = getFirestore(app)