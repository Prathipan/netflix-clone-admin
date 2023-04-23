import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6m1PGXOeOrtF88Z8XR83MJu685vTXr-0",
  authDomain: "netflix-cfeba.firebaseapp.com",
  projectId: "netflix-cfeba",
  storageBucket: "netflix-cfeba.appspot.com",
  messagingSenderId: "781048208445",
  appId: "1:781048208445:web:30c00f65bb59a4aaf55e54",
  measurementId: "G-8PZ71251HF",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
//   const db = getFirestore(app);
  const storage = getStorage();

  export default storage;
