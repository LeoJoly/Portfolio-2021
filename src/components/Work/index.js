// == packages imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == local imports
// components
import Experience from './Experience';

const Work = ({ experiences }) => {
  const [experience, setExperience] = useState(experiences[0]);

  return (
    <section className="work">
      <div className="work__content">
        <h2 className="work__content__title">Work.</h2>
        <div className="work__content__flow row">
          <div className="work__content__links column">
            {experiences.map((exp => {
              return <div className="work__content__link">{exp.title}</div>
            }))}
          </div>
          <Experience experience={experience} />
        </div>
      </div>
    </section>
  );
};

Work.propTypes = {
  experiences: PropTypes.array.isRequired,
}

export default Work;