import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const join = () => {
        setCurrUser({
          id: 1,
          name: "John Doe",
        });
    };

    const leave = () => {
        setCurrUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currUser))
    },[currUser])

    return(
        <AuthContext.Provider value={{currUser, join, leave}}>
            { children }
        </AuthContext.Provider>
    )
}