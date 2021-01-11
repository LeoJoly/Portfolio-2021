// == packages imports
import React from 'react';

// == local imports
// components
import Experience from './Experience';

const Work = () => (
  <section className="work">
    <div className="work__content">
      <h2 className="work__content__title">Work.</h2>
      <div className="work__content__flow row">
        <div className="work__content__links column">
          <a href="/" className="work__content__link work__content__link--active" target="_blank">The Counter</a>
          <a href="/" className="work__content__link" target="_blank">Fringilla</a>
          <a href="/" className="work__content__link" target="_blank">Incididunt</a>
        </div>
        <Experience />
      </div>
    </div>
  </section>
);

export default Work;