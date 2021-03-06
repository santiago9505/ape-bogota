import React, { useEffect, useState } from "react";
import config from "../firebase";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    config.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <Context.Provider value={{ currentUser }}>{children}</Context.Provider>
  );
};
