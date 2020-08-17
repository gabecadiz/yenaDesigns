import React, { Component } from 'react';

import ImageSmall from '../images/placeholder-small.JPG';
import ImageMedium from '../images/placeholder-medium.JPG';
import ImageLarge from '../images/placeholder-large.JPG';

import Icon2 from '../images/Icon2.svg';
import Icon from '../images/Icon.svg';

const ResponsiveImage = () => (
  <img
    src={ImageMedium}
    srcSet={`${ImageSmall} 600w, ${ImageMedium} 900w, ${ImageLarge} 1200w`}
  />
);

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1 className="heading-primary">Home Page</h1>
        {/* example of using bigger file for higher density screens */}
        <picture className="homepage__wallpaper">
          {/* picture element allows multiple sources for 1 image*/}
          <ResponsiveImage />
          <source
            srcSet={`${ImageSmall} 1x, ${ImageSmall} 2x`}
            media="max-width: 600px"
          ></source>
          <source
            srcSet={`${ImageMedium} 1x, ${ImageMedium} 2x`}
            media="max-width: 1200px"
          ></source>
        </picture>
        <span className="subtitle">Welcome to my website</span>
      </div>
    );
  }
}

export default Home;
