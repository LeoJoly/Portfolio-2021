// == Package Imports
import React, { useRef } from 'react';

// == Local imports
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

const Contact = () => {
  const contactRef = useRef(null);

  useAnimateOnScroll(contactRef, 0, 60);

  return (
    <section className="contact" id="contact">
      <div ref={contactRef} className="contact__content">
        <h2 className="contact__content__title">Contact.</h2>
        <p className="contact__content__text">
          If you'd like to get more details on my work, discuss about a project, or simply chat about mountains and snowboarding, don't hesitate to get in touch.
        </p>
        <div className="contact__content__links">
          <div className="contact__content__links__el">
            <a href="mailto:joly.leo@gmail.com">Mail</a>
            <div className="contact__content__links__el__under" />
          </div>
          <div className="contact__content__links__el">
            <a href="https://www.linkedin.com/in/leojoly/" target="_blank" rel="noreferrer">LinkdeIn</a>
            <div className="contact__content__links__el__under" />
          </div>
          <div className="contact__content__links__el">
            <a href="https://github.com/LeoJoly" target="_blank" rel="noreferrer">GitHub</a>
            <div className="contact__content__links__el__under" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;