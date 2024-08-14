import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
