import React from 'react';
// import Platform from './components/Platform';
import Hero from './components/Hero';
import Header from './components/Header';
import Digital from './components/Digital';
import Features from './components/Features';
import FourElement from './components/FourElement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Digital/>
      <Features/>
      <FourElement/>
      <Footer/>
    </div>
  );
}

export default App;
