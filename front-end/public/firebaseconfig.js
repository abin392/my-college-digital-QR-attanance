import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPTuPYFf3avrEzxRYjKD4nu_-KjPJgWeI",
  authDomain: "kskcet-1eab0.firebaseapp.com",
  projectId: "kskcet-1eab0",
  storageBucket: "kskcet-1eab0.firebasestorage.app",
  messagingSenderId: "886706257635",
  appId: "1:886706257635:web:6242a349e77e7b41268fd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Attach to window so our React/Babel script can use it
window.firebaseAuth = {
    auth,
    db,
    doc,
    setDoc,
    getDoc,
    deleteDoc,
    collection,
    getDocs,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    googleProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut 
};