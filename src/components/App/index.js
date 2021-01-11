// == packages imports
import React from 'react';

// == local imports
// components
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
// data
import experiences from '../../data';

const App = () => (
  <div className="app">
    <Header />
    <Home />
    <About />
    <Work experiences={experiences} />
    <Contact />
  </div>
);

export default App;
