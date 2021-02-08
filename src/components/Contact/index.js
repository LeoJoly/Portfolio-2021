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
          <a href="mailto:joly.leo@gmail.com">Mail</a>
          <a href="https://www.linkedin.com/in/leojoly/" target="_blank" rel="noreferrer">LinkdeIn</a>
          <a href="https://github.com/LeoJoly" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;