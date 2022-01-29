import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAVsv0xGua_CyayDfEaxfyokguZJab04tE",
    authDomain: "disneyclone-39fb4.firebaseapp.com",
    projectId: "disneyclone-39fb4",
    storageBucket: "disneyclone-39fb4.appspot.com",
    messagingSenderId: "802304101247",
    appId: "1:802304101247:web:b673dcb361975d5227684a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //Actual Database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //Google Authentication
const storage = firebase.storage();

export { auth, provider, storage };
export default db;