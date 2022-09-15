// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCrPT-UBS1G4jnm2EqvLmU2e4qVwfnfrtA",
      authDomain: "jeremyjs-dev-portfolio.firebaseapp.com",
      projectId: "jeremyjs-dev-portfolio",
      storageBucket: "jeremyjs-dev-portfolio.appspot.com",
      messagingSenderId: "659902068229",
      appId: "1:659902068229:web:af567c706e1f4eca970e6c",
      measurementId: "G-0CQQZZLVZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
