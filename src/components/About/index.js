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
        <div className="about__content__box">
          <p className="about__content__box__text">
            I'm Leo, frontend developer based between Paris and the French alps. With my past as Communication Manager, I have a serious passion for design and creation. Now I focus on writting simple and fonctional code to create intuitive and dynamic user experiences.
          </p>
          <p className="about__content__box__text">
            Stack: JS, React, Redux, Node.js, PostgreSQL, CSS, SCSS, HTML.
          </p>
          <ul className="about__content__box__list">
            {/* <li>
              <div className="date">2020</div>
              <div className="formation">Ecole O'Clock - coding bootcamp</div>
            </li> */}
            <li>
              <div className="date">2020</div>
              <div className="formation">Web developper certificate (Ecole O'clock) - coding bootcamp</div>
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
      </div>
    </section>
  );
};

export default About;