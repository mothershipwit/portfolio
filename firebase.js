
import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCfuZ_rN_ngNd9gxgaaajtW3HIxp9lmFmY",
    authDomain: "comments-eb439.firebaseapp.com",
    databaseURL: "https://comments-eb439.firebaseio.com",
    projectId: "comments-eb439",
    storageBucket: "comments-eb439.appspot.com",
    messagingSenderId: "819136647907",
    appId: "1:819136647907:web:219b2fcece602120b52bd6"
  };
  

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase