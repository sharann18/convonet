import React, { useContext, useRef, useEffect, useState } from "react";
import { IoMdSend } from 'react-icons/io'
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";
import moment from "moment";
import chatPopAudio from "../../assets/facebook_chat.mp3"
import "./ChatWindow.css";

export const ChatWindow = () => {
  const { socket, currUser } = useContext(AuthContext);
  const message = useRef("");
  const containerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  console.log("state", messages, messages.length);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatPop = new Audio(chatPopAudio);

  const sendMessage = (event) => {
    event.preventDefault();
    if(message.current.value != "") {
    const data = {
      id: JSON.parse(localStorage.getItem("user")).id,
      name: currUser.name,
      message: message.current.value,
      dateTime: new Date()
    };

    setMessages((prevMessages) => (
      [...prevMessages,
        {
          id: data.id,
          name: data.name, 
          message: data.message,
          dateTime: data.dateTime
        }]
    ));

    if(socket) {
      socket.emit("message", data);
    }

    message.current.value = "";
    message.current.focus();
    } 
  }

  useEffect(() => {
    if (socket) {
      const handleChatMessage = (data) => {
        chatPop.play();
        setMessages((prevMessages) => (
          [...prevMessages,
            {
              id: data.id,
              name: data.name, 
              message: data.message,
              dateTime: data.dateTime
            }]
        ))
      };

      socket.on("chat-message", handleChatMessage);

      // Clean up the event listener when the component unmounts
      return () => {
        socket.off("chat-message", handleChatMessage);
      };
    }
  }, [socket]);

  return (
      <div className="chat-window">
        <div className="name">
          <span><FaUserAlt /></span>
          <p id="name-input" className="name-input"> {currUser.name} </p>
        </div>

        <ul className="message-container" id="message-container" ref={containerRef}>
        { messages.map((msg) => {
          const loggedInUserId = JSON.parse(localStorage.getItem("user"))?.id;
          const isCurrentUserMessage = loggedInUserId && msg.id === loggedInUserId;
        
          const messageClass = isCurrentUserMessage ? "message-right" : "message-left";

          return(
            <li className= {messageClass} key={msg.message}>
              <p className="message">
                {msg.message}
                <span> {msg.name} ● {moment(msg.dateTime).fromNow()}</span>
              </p>
            </li>
          )
        })}
      </ul>
      <form className="message-form" onSubmit={sendMessage}>
        <input type="text" name="message" className="user-message" id="user-message" ref={message}/>
        <div className="vert-divider" />
        <button type="submit" className="send-button"><IoMdSend /></button>
      </form>
      </div>
  );
};