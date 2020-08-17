import React, { Component } from 'react';

import ImageSmall from '../images/placeholder-small.JPG';
import ImageMedium from '../images/placeholder-medium.JPG';
import ImageLarge from '../images/placeholder-large.JPG';

const ResponsiveImage = () => (
  <img
    alt="hero banner"
    src={ImageLarge}
    srcSet={`${ImageSmall} 250w, ${ImageMedium} 415w, ${ImageLarge} 600w`}
    sizes="(max-width: 415px) 50vw, (max-width:600) 75vw, 600px"
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
        </picture>
        <span className="subtitle">Welcome to my website</span>
      </div>
    );
  }
}

export default Home;
