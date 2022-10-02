import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Landing from "../src/screens/Landing";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Knitted from "./screens/Knitted";
import Worker from "./screens/Worker";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import Woven from "./screens/Woven";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knitted" element={<Knitted />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/woven" element={<Woven />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
