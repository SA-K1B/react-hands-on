import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwC4A35PXORMEk9HYGiOiLQUV60W-dJXU",
    authDomain: "fir-hands-on-aa1bc.firebaseapp.com",
    projectId: "fir-hands-on-aa1bc",
    storageBucket: "fir-hands-on-aa1bc.firebasestorage.app",
    messagingSenderId: "518200784290",
    appId: "1:518200784290:web:1a6431fa469711ea486efb"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };