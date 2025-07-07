// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJf84gZjnmig5Ls1hZVVDBQgBLS-hqiHk",
    authDomain: "react-coder-db.firebaseapp.com",
    projectId: "react-coder-db",
    storageBucket: "react-coder-db.firebasestorage.app",
    messagingSenderId: "636350418439",
    appId: "1:636350418439:web:c915b0fb75045d3373a4a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);