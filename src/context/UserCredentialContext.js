import React, { useState, useContext, createContext } from "react";

const UserCredentialContext = createContext(); // We created a context

export function useUserCredential() {
  return useContext(UserCredentialContext);
}

export function UserCredentialProvider({ children }) {
  const localStorageUsername = localStorage.getItem("UserCredential"); // Checkes if isAuth inside the localstorage is true
  const [userCredential, setUserCredential] = useState(localStorageUsername);

  return (
    <>
      <UserCredentialContext.Provider
        value={{ userCredential, setUserCredential }}
      >
        {children}
      </UserCredentialContext.Provider>
    </>
  );
}
