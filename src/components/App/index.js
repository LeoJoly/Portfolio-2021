// == packages imports
import React, { useEffect } from 'react';

// == local imports
// components
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
// data
import experiences from '../../data';

const App = () => {
  // calculate the window height
  useEffect(() => {
    // getting the window height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // listen to window resizing
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Work experiences={experiences} />
      <Contact />
    </div>
  );
}

export default App;
