import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALfqNz7PdFCp7RxKcqr7DRXe43b6lv7VE",
  authDomain: "dardotpverification.firebaseapp.com",
  projectId: "dardotpverification",
  storageBucket: "dardotpverification.appspot.com",
  messagingSenderId: "672157470167",
  appId: "1:672157470167:web:583432785c6459b3870f92",
  measurementId: "G-VV0SC1R0PE"
};

const app = initializeApp(firebaseConfig);

export default app;