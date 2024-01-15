import React, { useRef } from "react";
import { IoMdSend } from 'react-icons/io'
import { FaUserAlt } from "react-icons/fa";

import "./ChatWindow.css";

export const ChatWindow = () => {

  return (
      <div className="chat-window">
        <div className="name">
          <span><FaUserAlt /></span>
          <input
            type="text"
            id="name-input"
            className="name-input"
            value= "anonymous"
            maxlength="20"
          />
        </div>

        <ul className="message-container" id="message-container">
        <li className="message-left">
          <p className="message">
            lorem impsun
            <span> bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li className="message-right">
          <p className="message">
            lorem impsun
            <span> bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li className="message-feedback">
          <p className="feedback" id="feedback">user is typing...</p>
        </li>
      </ul>

      <form className="message-form">
        <input type="text" name="message" className="user-message" id="user-message" />
        <div class="vert-divider" />
        <button type="submit" className="send-button"><IoMdSend /></button>
      </form>
      </div>
  );
};
