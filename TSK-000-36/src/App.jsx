import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer';
import ContactPage from "./pages/ContactPage";


const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internships" element={'internship'} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={"about"} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
