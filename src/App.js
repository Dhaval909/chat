import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route exact path="/chats" Component={ChatPage}></Route>
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
