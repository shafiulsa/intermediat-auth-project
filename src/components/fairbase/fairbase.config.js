// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPCefueZDuuBKyBzEahVo9dQf51I9d7JU",
  authDomain: "intermediate-auth-project.firebaseapp.com",
  projectId: "intermediate-auth-project",
  storageBucket: "intermediate-auth-project.appspot.com",
  messagingSenderId: "637677815347",
  appId: "1:637677815347:web:f9201c5ed6bab6a85f0546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;