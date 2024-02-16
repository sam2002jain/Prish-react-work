import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".//Home/Home";
import About from ".//About/About";
import Team from ".//Team/Team";
import Blog from ".//Blog/Blog";
import Reach from ".//Reach/Reach";
import Nav from ".//Components/Header";
import Footer from ".//Components/Footer";
import Audit from ".//Audit/Audit";
import Taxation from ".//Taxation/Taxation";
import Bookkeeping from ".//Bookkeeping/Bookkeeping";
import Corporate from ".//CorporatePage/Corporate";
import Corporation from ".//CorporationPages/Corporation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/corporation" element={<Corporation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
