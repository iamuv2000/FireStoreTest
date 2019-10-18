import React from 'react'
import * as firebase from "firebase/app";
import "firebase/firestore"
require('dotenv').config();
const firebaseConfig = {
    apiKey:process.env.API_KEY,
    authDomain:process.env.AUTH_DOMAIN,
    databaseURL:process.env.DATABASE_URL,
    projectId:process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appId:process.env.APP_ID,
    measurementId:process.env.MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
class Fire extends React.Component {

    componentDidMount(){
        // Add a second document with a generated ID.
        firestore.doc("users/UserData").set({
            first: "Yuvraj",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    //Realtime fetch
    // getrealTimeUpdates=()=>{
    //     firestore.doc("users/first").onSnapshot((doc)=>{
    //         if(doc && doc.exists){
    //             const MyData=doc.data();
    //             console.log(MyData)
    //         }
    //     })
    // }

    render(){
        return(
            <div>
            Success!
            </div>
        )
    }
}

export default Fire