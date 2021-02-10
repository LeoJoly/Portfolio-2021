import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = ({ experience }) => {

  gsap.registerPlugin(ScrollTrigger);

  const expRef = useRef(null);

  useEffect(() => {
    const el = expRef.current
    gsap.from(el, {
      duration: 2,
      opacity: 0,
      y: 50,
      ease: "power4.out",
    })
  }, [experience]);

  return (
    <div ref={expRef} className="experience">
      <p className="experience__description">
        {experience.description}
      </p>
      <div className="experience__links">
        {experience.links.map((link) => {
          // eslint-disable-next-line react/jsx-no-target-blank
          return (
            <div className="experience__links__el">
              <a key={link.id} href={link.url} target="_blank">{link.name}</a>
              <div className="experience__links__el__under" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Experience.prototype = {
  experience: PropTypes.object.isRequired,
}

export default Experience;