// == Package imports
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'

// comptonent
const Header = () => (
  <header className="header">
    <nav>
      <ul className="menu">
        <li className="menu__el">
          <ScrollLink className="menu__el__btn" activeClass="menu__el__btn active" to="about" spy smooth={true} duration={800}>
            <p>About</p>
            <ScrollLink className="menu__el__btn__under" activeClass="menu__el__btn__under--active" to="about" spy />
          </ScrollLink>
        </li>
        <li className="menu__el">
          <ScrollLink className="menu__el__btn" activeClass="menu__el__btn active" to="work" spy smooth={true} duration={800}>
            <p>Work</p>
            <ScrollLink className="menu__el__btn__under" activeClass="menu__el__btn__under--active" to="work" spy />
          </ScrollLink>
        </li>
        <li className="menu__el">
          <ScrollLink className="menu__el__btn" activeClass="menu__el__btn active" to="contact" spy smooth={true} duration={800}>
            <p>Contact</p>
            <ScrollLink className="menu__el__btn__under" activeClass="menu__el__btn__under--active" to="contact" spy />
          </ScrollLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;