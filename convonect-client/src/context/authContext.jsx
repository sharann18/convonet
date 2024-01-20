import { createContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currUser));
    },[currUser]);



    const join = () => {
        setCurrUser({
          id: 1,
          name: "John Doe",
        });

        const newSocket = io.connect("http://localhost:3000"); //establish websocket connection to server
        setSocket(newSocket);
    };

    const leave = () => {
        setCurrUser(null);
        
        if(socket) {
            socket.disconnect(); //disconnect websocket connection
        }
    };

    return(
        <AuthContext.Provider value={{currUser, join, leave, socket}}>
            { children }
        </AuthContext.Provider>
    )
}