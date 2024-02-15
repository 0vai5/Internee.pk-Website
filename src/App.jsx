import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer';
import ContactPage from "./pages/ContactPage";
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const scroll = new LocomotiveScroll({
    smooth: true
  });
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
