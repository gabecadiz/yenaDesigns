import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../images/Icon.svg';
import Icon2 from '../images/Icon2.svg';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="personal-info">
          <span className="name">
            <Link to="/">
              <img
                srcSet={`${Icon} 1x, ${Icon2} 2x`}
                className="yena-logo"
                alt="logo"
              />
            </Link>
            Yena Oh Test Deploy
          </span>
          <span className="email"> yena2009@hotmail.com</span>
        </div>
        <nav>
          <div className="hyper-links">
            <Link to="/work">
              <span className="work">Work</span>
            </Link>
            <Link to="/about">
              <span className="about">About</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
