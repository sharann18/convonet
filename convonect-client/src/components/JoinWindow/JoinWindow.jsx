import React, { useContext, useRef } from 'react'
import "./JoinWindow.css"
import { AuthContext } from '../../context/authContext'

export const JoinWindow = () => {
  const { join } = useContext(AuthContext);
  const name = useRef("");

  return (
    <div className='join-window'>
            <input type="text" className='join-name-input' placeholder="What do you want others to call you?" ref={name}/>
            <input type="password" className='join-passkey-input' placeholder="Enter the passkey"/>
            <button className='join-button' onClick={() => join(name.current.value)}>Join</button>
    </div>
  )
}