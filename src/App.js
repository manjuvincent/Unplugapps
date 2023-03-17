import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from './components/pages/Home.js';
import { About } from './components/pages/About.js';
// import {Blog} from "./components/pages/Blog.js";
import {Contact} from "./components/pages/Contact.js";
import {Accurate} from './components/pages/Accurate.js';
import {RentSoftware } from './components/pages/RentSoftware.js';
import {Network} from './components/pages/Network.js';
import {Linux} from './components/pages/Linux.js'
import InnovPage from './components/Innovation.js'
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pagess">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          {/* <Route path="/Blog" element={<Blog />}></Route> */}
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Accurate" element={<Accurate />}></Route>
          <Route path="/Software" element={<RentSoftware />}></Route>
          <Route path="/Network" element={<Network />}></Route>
          <Route path="/Linux" element={<Linux />}></Route>
          <Route path="/InnovPage" element={<InnovPage />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}