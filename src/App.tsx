import React from 'react';
//components
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testomonials from './components/testomonials/Testomonials';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testomonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
