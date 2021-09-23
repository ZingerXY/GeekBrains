// Import the functions you need from the SDKs you need
   import firebase from "firebase";
import {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STURSGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	REACT_APP_FIREBASE_API_KEY_APP_ID,
} from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
	projectId: REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: REACT_APP_FIREBASE_STURSGE_BUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_APP_FIREBASE_API_KEY_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();