import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Landing from "../src/screens/Landing";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Product from "./screens/Product";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
