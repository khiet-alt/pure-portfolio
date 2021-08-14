import React from 'react';
//components
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testomonials from './components/testomonials/Testomonials';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
// style
import './app.scss'

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
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
