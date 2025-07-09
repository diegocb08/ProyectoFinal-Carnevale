import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJf84gZjnmig5Ls1hZVVDBQgBLS-hqiHk",
    authDomain: "react-coder-db.firebaseapp.com",
    projectId: "react-coder-db",
    storageBucket: "react-coder-db.firebasestorage.app",
    messagingSenderId: "636350418439",
    appId: "1:636350418439:web:c915b0fb75045d3373a4a2"
};

export const app = initializeApp(firebaseConfig);