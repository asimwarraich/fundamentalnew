import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import Landing from "../src/screens/Landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
