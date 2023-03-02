import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIkERMfkGnlUMhg5ZHFG2HU_zWWYW2apM",
  authDomain: "crwn-clothing-db-2793f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-2793f-default-rtdb.firebaseio.com",
  projectId: "crwn-clothing-db-2793f",
  storageBucket: "crwn-clothing-db-2793f.appspot.com",
  messagingSenderId: "475990787361",
  appId: "1:475990787361:web:2a91999e9fcaaaf4e96a60",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if user data exists

  //if user data doesnot exist

  //return userDocRef
};
