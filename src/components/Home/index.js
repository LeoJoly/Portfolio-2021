// == Package imports
import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  // targeting main title
  const titleRef = useRef(null);

  // scrolling animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = titleRef.current

    gsap.to(el, {
      duration: 3,
      opacity: 0,
      scale: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "30% 5%",
        scrub: 0.5,
        toggleActions: "restart pause reverse pause",
      }
    })

  }, []);

  return (
    <section className="home">
      <h1 ref={titleRef} className="main-title">Léo Joly</h1>
      <div className="home__box">
        <ScrollLink className="home__box__btn" to="about" spy smooth={true} duration={800} />
      </div>
      <div className="home__gradient" />
    </section>
  );
};

export default Home;