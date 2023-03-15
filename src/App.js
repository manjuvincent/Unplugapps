import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import {Home} from './components/pages/Home.js';
import {About} from './components/pages/About.js';
import {Blog} from "./components/pages/Blog.js";
import {Contact} from "./components/pages/Contact.js";


export default function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <div className="pagess">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}