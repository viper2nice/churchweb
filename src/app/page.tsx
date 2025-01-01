"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Leaders from "./Pages/Leaders";
import Member from "./Pages/Member";
import Home from "./Pages/Home";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Leaders" element={<Leaders />} />
      </Routes>
    </Router>
  );
}
