import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
