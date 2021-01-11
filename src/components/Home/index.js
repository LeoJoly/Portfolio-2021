// == Package imports
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'

const Home = () => (
  <section className="home">
    <h1 className="main-title">Léo Joly</h1>
    <div className="home__btn" />
    <ScrollLink className="home__btn" to="about" spy smooth={true} duration={800} />
    <div className="home__gradient" />
  </section>
);

export default Home;