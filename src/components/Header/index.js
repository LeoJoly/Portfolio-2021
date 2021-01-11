// == Package imports
import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// comptonent
const Header = () => (
  <header className="header row">
    <nav>
      <ul className="menu row">
        <li className="menu__btn">
          <Link activeClass="active" to="about" spy smooth={true} duration={800}>About</Link>
        </li>
        <li className="menu__btn">
          <Link activeClass="active" to="work" spy smooth={true} duration={800}>Work</Link>
        </li>
        <li className="menu__btn">
          <Link activeClass="active" to="contact" spy smooth={true} duration={800}>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;