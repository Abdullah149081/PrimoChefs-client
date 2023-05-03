import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  // sign-up user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = useMemo(() => ({ user, createUser }), [user]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
