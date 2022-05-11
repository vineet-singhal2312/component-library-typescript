import React from "react";
import "./App.css";
import { Header } from "./components/Navbar/Navbar";
import SideNav from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Button from "./components/Generic/Button/Button";
import Home from "./pages/Home/Home";
import Cards from "./components/Generic/Card/Cards";

function App() {
  return (
    <div className="App">
      <Header heading="yoo" />
      <SideNav />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
