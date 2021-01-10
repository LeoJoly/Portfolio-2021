import React from 'react';

const Work = () => (
  <section className="work">
    <div className="work__content">
      <h2 className="work__content__title">Work.</h2>
      <div className="work__content__flow row">
        <div className="work__content__links column">
          <a href="/" className="work__content__link work__content__link--active" target="_blank">Fermentum</a>
          <a href="/" className="work__content__link" target="_blank">Fringilla</a>
          <a href="/" className="work__content__link" target="_blank">Incididunt</a>
        </div>
        <div className="work__content__ex" />
      </div>
    </div>
  </section>
);

export default Work;