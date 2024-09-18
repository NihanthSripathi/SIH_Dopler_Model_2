import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAlHJSqNHyPtkrEpGcALIYKvBXIuCMYS9E",
    authDomain: "replit40.firebaseapp.com",
    databaseURL: "https://replit40-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "replit40",
    storageBucket: "replit40.appspot.com",
    messagingSenderId: "425549666219",
    appId: "1:425549666219:web:5c651d20453169db6be4ee",
    measurementId: "G-5PT5M9VYW1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init Services
const db = getFirestore();

// collection from FS
const colRef = collection(db, "Micro-doppler");

// get the collection data 
getDocs(colRef).then((snapshot) => {
    let books = [];
    snapshot.docs.forEach(element => {
        books.push({ ...element.data(), id: element.id });
    });
    console.log(books);
});
