import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const taskcontext = createContext();

export const useTask = () => useContext(taskcontext);
const TaskContextProvider = ({ children }) => {
  //   const { user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    // getTaskDoc();
  }, []);

  //   if (!user) return <Navigate to={"login"} />;

  const addTask = async (name, desc, date, tog_com, tog_imp, user) => {
    const docref = await addDoc(collection(db, "tasks"), {
      email: user.email,
      name: name,
      desc: desc,
      date: date,
      tog_com: tog_com,
      tog_imp: tog_imp,
    });
    console.log(docref);

    setData(
      data
        ? [
            ...data,
            {
              id: docref.id,
              email: user.email,
              name: name,
              desc: desc,
              date: date,
              tog_com: tog_com,
              tog_imp: tog_imp,
            },
          ]
        : data
    );
  };

  const getTaskDoc = async (user) => {
    const docRef = collection(db, "tasks");
    const q = await query(docRef, where("email", "==", user?.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setData([]);
    } else {
      const userData = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setData(userData);
    }
  };

  const handleTask = async (id) => {
    const docRef = collection(db, "tasks");
    const docSnap = await getDocs(docRef);
    const doc = docSnap.docs.find((doc) => doc.id === id);
    if (doc) {
      await updateDoc(doc.ref, { tog_com: !doc.data().tog_com });
      setData(
        data?.map((item) => {
          if (item.id === id) {
            return { ...item, tog_com: !item.tog_com };
          } else {
            return item;
          }
        })
      );
    } else {
      console.log("No such document!");
    }
  };

  const delDoc = async (id) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
    setData(data?.filter((item) => item.id !== id));
  };
  const getDocByCom = async (user) => {
    const docRef = collection(db, "tasks");
    const q = await query(docRef, where("email", "==", user.email));
    const docSnap = await getDocs(q);
    const userData = docSnap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    const completed = userData.filter((item) => item.tog_com === true);
    return completed;
  };

  return (
    <taskcontext.Provider
      value={{
        addTask,
        getTaskDoc,
        data,
        setData,
        handleTask,
        delDoc,
        getDocByCom,
      }}
    >
      {children}
    </taskcontext.Provider>
  );
};

export default TaskContextProvider;
