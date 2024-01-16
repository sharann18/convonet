import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { JoinWindow } from "./components/JoinWindow/JoinWindow";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import "./App.css"

function App() {

  const { currUser, leave } = useContext(AuthContext);

  
  return (
    <div className="main">
      <h2 id="title">ConvoNet 💬</h2>
      {/* <button className="leave-button">Leave</button>
      <ChatWindow />
      <h4 id="total-users">Total users: 3</h4> */}
      {/* <JoinWindow /> */}


      {currUser
      ? <>
          <button className="leave-button" onClick={leave}>Leave</button>
          <ChatWindow />
          <h4 id="total-users">Total users: 3</h4>
        </>
      : <JoinWindow />}
    </div>
  )
}

export default App;