import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign-up user
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign-in user
  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut user
  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  // google sing
  const googleSign = () => {
    // setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  // github sign
  const githubSing = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  //  update Profile user
  const updateUserData = (newUser, name, photo) => {
    updateProfile(newUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = useMemo(() => ({ user, createUser, signIn, logOut, googleSign, loading, updateUserData, githubSing }), [loading, user]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
