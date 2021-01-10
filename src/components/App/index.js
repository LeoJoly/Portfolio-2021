// == packages imports
import React from 'react';

// == local imports
// components
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';

const App = () => (
  <div className="app">
    <Header />
    <Home />
    <About />
    <Work />
    <Contact />
  </div>
);

export default App;
