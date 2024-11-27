import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <SuccessStories />
      <About />
      <Contact />
    </div>
  );
}

export default App;