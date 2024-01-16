import React, { useContext } from 'react'
import "./JoinWindow.css"
import { AuthContext } from '../../context/authContext'

export const JoinWindow = () => {
  const { join } = useContext(AuthContext);
  return (
    <div className='join-window'>
            <input type="text" className='join-name-input' placeholder="What do you want others to call you?"/>
            <input type="text" className='join-passkey-input' placeholder="Enter the passkey"/>
            <button className='join-button' onClick={join}>Join</button>
    </div>
  )
}