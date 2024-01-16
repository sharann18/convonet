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
            placeholder= "anonymous"
            maxLength="20"
          />
        </div>

        <ul className="message-container" id="message-container">
        <li className="message-left">
          <p className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem a aliquam asperiores dignissimos quos cupiditate, quas similique provident, nihil temporibus quis molestias dolorem ipsum! Voluptatum rerum itaque similique? Vitae.
            <span> bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li className="message-right">
          <p className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum ratione modi corrupti veniam expedita repellendus temporibus fuga vero molestiae eaque, quis, animi ducimus consequatur cupiditate accusamus beatae fugit. Odit?
            <span> bluebird ● 26 July 10:40</span>
          </p>
        </li>

        <li className="message-feedback">
          <p className="feedback" id="feedback">user is typing...</p>
        </li>
      </ul>

      <form className="message-form">
        <input type="text" name="message" className="user-message" id="user-message" />
        <div className="vert-divider" />
        <button type="submit" className="send-button"><IoMdSend /></button>
      </form>
      </div>
  );
};
