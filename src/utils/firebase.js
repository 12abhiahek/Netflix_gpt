// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR6RfB2KnT9Cm_OSKTKG-arjEpYF21Iv0",
  authDomain: "netflix-gpt-92b4b.firebaseapp.com",
  projectId: "netflix-gpt-92b4b",
  storageBucket: "netflix-gpt-92b4b.firebasestorage.app",
  messagingSenderId: "622743835239",
  appId: "1:622743835239:web:8e446cdb4937892062bac2",
  measurementId: "G-4ZM9J9XJ2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);