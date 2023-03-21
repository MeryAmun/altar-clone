import "./App.css";
import { Footer, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { IoIosArrowDropupCircle } from 'react-icons/io';
import {TbMessageChatbot} from 'react-icons/tb'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
<TbMessageChatbot className="app__chatBotIcon"/>
      <a href="#top">
  <IoIosArrowDropupCircle className="app__chatIcon" />
  </a>
    </div>
  );
}

export default App;
