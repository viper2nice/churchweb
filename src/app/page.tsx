"use client";

import Navbar from "./components/Navbar";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from "./Pages/About";
import Leaders from "./Pages/Leaders";
import Member from "./Pages/Member";
import Home from "./Pages/Home";
import Layout2 from "./layout2";
import Navbar2 from "./components/Navbar2";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout2 />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Leaders" element={<Leaders />} />
        </Route>
      </Routes>
    </Router>
  );
}
