import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../public/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

type userType = {
  email: string;
  password: string;
  username: string;
  bday: Date;
};

const AuthCtx = createContext<any>(null);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>({});

  const signUp = (
    email: string,
    password: string,
    username: string,
    bday: any
  ) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      userName: username,
      BirthDay: bday || "",
      savedShows: [],
    });
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthCtx.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthCtx.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthCtx);
}
