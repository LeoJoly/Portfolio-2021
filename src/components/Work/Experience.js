import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => (
  <div className="experience">
    <p className="experience__description">
      {experience.description}
    </p>
    <div className="experience__links row">
      {experience.links.map((link) => {
        return <a href={link.url} target="_blank">{link.name}</a>;
      })}
    </div>
  </div>
);

Experience.prototype = {
  experience: PropTypes.object.isRequired,
}

export default Experience;