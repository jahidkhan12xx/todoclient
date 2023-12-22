// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc5Ot2uSS-npgKLpq8In2dxmo9lIj8X1k",
  authDomain: "todoprojectn.firebaseapp.com",
  projectId: "todoprojectn",
  storageBucket: "todoprojectn.appspot.com",
  messagingSenderId: "895850929197",
  appId: "1:895850929197:web:d3cdaaa9c189374f1a6ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
