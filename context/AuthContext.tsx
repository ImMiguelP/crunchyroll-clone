import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, UserData, usersCol } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

type ContextType = {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
};

const AuthCtx = createContext<ContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const userRef = doc(usersCol, `${user?.email}`);
    const data = (await getDoc(userRef)).data();
    if (data) {
      setUserData(data);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (!userData) {
        await getUserData();
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthCtx.Provider value={{ user, userData, loading }}>
      {children}
    </AuthCtx.Provider>
  );
};

export function useUserAuth() {
  const context = useContext(AuthCtx);
  if (!context) throw new Error("Must inside of AuthCtx Provider");

  const { user, userData, loading } = context;

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

  const animeRef = doc(db, "users", `${user?.email}`);

  return {
    user,
    userData,
    loading,
    signUp,
    logIn,
    logOut,
    animeRef,
  };
}
