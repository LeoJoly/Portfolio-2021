// == Package imports
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'

// comptonent
const Header = () => (
  <header className="header row">
    <nav>
      <ul className="menu row">
        <li className="menu__btn">
          <ScrollLink activeClass="active" to="about" spy smooth={true} duration={800}>About</ScrollLink>
        </li>
        <li className="menu__btn">
          <ScrollLink activeClass="active" to="work" spy smooth={true} duration={800}>Work</ScrollLink>
        </li>
        <li className="menu__btn">
          <ScrollLink activeClass="active" to="contact" spy smooth={true} duration={800}>Contact</ScrollLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;