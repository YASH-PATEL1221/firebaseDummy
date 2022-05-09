import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection,addDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your API key",
  authDomain: "new-project-c96b0.firebaseapp.com",
  projectId: "new-project-c96b0",
  storageBucket: "new-project-c96b0.appspot.com",
  messagingSenderId: "265733650720",
  appId: "1:265733650720:web:3f94bda5a18e911a51bf45",
  measurementId: "G-TW6FH35W04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

try{
    const addDocment = addDoc(collection(db,"users"),{
        name:"gattu",
        last:"patel",
        born:2003
    })
    console.log("doc ID",addDocment.id);
}
catch(e){
    console.log(e);
}


function Firebaseapp() {
  return (
    <div>Firebaseapp</div>
  )
}

export default Firebaseapp
