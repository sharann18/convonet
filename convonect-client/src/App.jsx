import { ChatWindow } from "./components/ChatWindow/ChatWindow"
import "./App.css"

function App() {

  return (
    <div className="main">
      <h1 id="title">ConvoNet 💬</h1>
      <ChatWindow />
      <h3 id="total-users">Total users: 3</h3>
    </div>
  )
}

export default App;