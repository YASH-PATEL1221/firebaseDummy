import React from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc,onSnapshot } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADNXmE257R8-3ldb8u-5Ex7xZstpn42RI",
  authDomain: "new-project-c96b0.firebaseapp.com",
  projectId: "new-project-c96b0",
  storageBucket: "new-project-c96b0.appspot.com",
  messagingSenderId: "265733650720",
  appId: "1:265733650720:web:3f94bda5a18e911a51bf45",
  measurementId: "G-TW6FH35W04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData(name,last,born){
  try {
    const docRef = await addDoc(collection(db,"users"),{
      name : name,
      last : last,
      born : born
    });
  
    console.log("document id",docRef.id);
  } catch (error) {
    console.log(error);
  }
}

addData("arrow","finch",2004);

async function getData(){
    const query = await getDocs(collection(db,"users"));
    console.log(query.docs.map(doc => doc.data()));
}

getData();


// To get single doc
onSnapshot(doc(db,"users","CuQTkwB9gq07Z98neKo1") , (doc) => {   
    console.log("data ", doc.data());
})


// update document
const documentRef = doc(db,"users","XGDtWDqmcIaKiyEEx8ka");

updateDoc(documentRef,{
  name:"jenil patel"
});


// update document
deleteDoc(documentRef);




function Firebaseapp() {
  return (
    <div>Firebaseapp</div>
  )
}

export default Firebaseapp