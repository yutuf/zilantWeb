import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Sponsorship from './components/Sponsorship';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
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
}

export default App;
