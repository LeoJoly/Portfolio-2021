// == Package Imports
import React, { useRef } from 'react';

// == Local imports
import animateOnScroll from '../../animateOnScroll';

const About = () => {
  
  const aboutRef = useRef(null);

  animateOnScroll(aboutRef, 0, 60);

  return (
    <section className="about" id="about">
      <div ref={aboutRef} className="about__content animate">
        <h2 className="about__content__title">Hello.</h2>
        <p className="about__content__text animate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus magna fringilla urna porttitor rhoncus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
        </p>
        <p className="about__content__text animate">
          Stack: JS, ReactJs, Redux, Node.js, PostgreSQL, CSS, HTML.
        </p>
        <ul className="about__content__list animate">
          <li>2020 - sed felis eget velit aliquet.</li>
          <li>2014 - at lectus urna duis convallis convallis.</li>
          <li>2012 - sed elementum tempus egestas sed sed risus pretium.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;