// == Package Imports
import React, { useRef } from 'react';

// == Local imports
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

const About = () => {
  
  const aboutRef = useRef(null);

  useAnimateOnScroll(aboutRef, 0, 60);

  return (
    <section className="about" id="about">
      <div ref={aboutRef} className="about__content">
        <h2 className="about__content__title">Hello.</h2>
        <p className="about__content__text">
          I'm Leo, fullstack developer based between Paris and the French alps. I'm a real passionate of design and animations. I like to code beautiful and fonctional things.
        </p>
        <p className="about__content__text">
          Stack: JS, React, Redux, Node.js, PostgreSQL, CSS, SCSS, HTML.
        </p>
        <ul className="about__content__list">
          <li>
            <div className="date">2021</div>
            <div className="formation">Ecole O'Clock - coding bootcamp</div>
          </li>
          <li>
            <div className="date">2015</div>
            <div className="formation">Master II (ISEG, Paris) - communication and marketing</div>
          </li>
          <li>
            <div className="date">2012</div>
            <div className="formation">Bachelor (Halmstad, Sweden) - business and administration</div>
          </li>
          <li>
            <div className="date">2011</div>
            <div className="formation">DUT (Grenoble) - communication and marketing</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;