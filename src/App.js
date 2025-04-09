import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from './assets/profile.jpg';

function App() {
  return (
    <div className="app-container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
