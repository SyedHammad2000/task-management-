import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((users) => {
      //   console.log(users);
      if (users) {
        setUser(users);
        setisAuthenticated(true);
        return;
      } else {
        setUser(null);
        setisAuthenticated(false);
      }
    });

    return unsub;
  }, []);

  const login = async (email, password) => {
    const signin = await signInWithEmailAndPassword(auth, email, password);
    console.log(signin);
  };
  const register = async (email, password, profileurl, username) => {
    const userAuth = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userAuth, "sss");

    const docRef = await addDoc(collection(db, "users"), {
      uid: userAuth.user?.uid,
      email: userAuth.user?.email,
      username: username,
      profileurl: profileurl,
    });

    console.log(docRef);
  };
  const logout = async () => {
    await auth.signOut();
  };

  return (
    <authContext.Provider
      value={{ logout, register, login, user, isAuthenticated }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
