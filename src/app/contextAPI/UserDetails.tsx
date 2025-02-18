"use client";
import React, { useState, createContext, useContext } from "react";


const UserDetailsContext = createContext();


export default function UserProvider({ children }:any) {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}
export const UseUserDetails = () => useContext(UserDetailsContext);
