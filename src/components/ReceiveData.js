import * as firebase from "firebase";
import "firebase/firestore"
var firestore = firebase.firestore();

const getrealTimeUpdates=()=>{
    firestore.doc("users/UserData").onSnapshot((doc)=>{
        const MyData=doc.data();
        console.log(MyData)
    })
}

getrealTimeUpdates();
console.log("running")
