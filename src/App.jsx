import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Sponsorship from './components/Sponsorship';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallPanel from './components/CallPanel';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Technology />
      <Sponsorship />
      <Team />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/panel" element={<CallPanel />} />
    </Routes>
  );
}

export default App;
