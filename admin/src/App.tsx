import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main_src/Main";
import Members from './components/Main_src/Main_components/Members';
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main">
          <Route path='' element={<Main />} />
          <Route path='members' element={<Members />} />
          <Route path='notions' element={<Members />} />
          <Route path='hmm' element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
