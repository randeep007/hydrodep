import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC970z9qafXdMpxp-dnaPOZ1ux-QYhfNR0",
    authDomain: "buildmybody-be17e.firebaseapp.com",
    projectId: "buildmybody-be17e",
    storageBucket: "buildmybody-be17e.appspot.com",
    messagingSenderId: "998817187676",
    appId: "1:998817187676:web:2283e0fe36ec5a7fa16399",
    measurementId: "G-YYVLLNZX4H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
