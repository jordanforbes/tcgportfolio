import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCzXyD37WUGfl7i9vnNW-vYOHUmBlxWx3w",
    authDomain: "tcgportfolio-63df4.firebaseapp.com",
    projectId: "tcgportfolio-63df4",
    storageBucket: "tcgportfolio-63df4.appspot.com",
    messagingSenderId: "266850935631",
    appId: "1:266850935631:web:4f18f0564433805e8d9b3a",
    measurementId: "G-ZCRMCKFX2G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage(); //project storage

const projectFirestore = firebase.firestore(); //

export { projectStorage, projectFirestore }