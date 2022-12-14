import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import landingImage from '../imgs/landing-image.png';

export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Welcome, To Games World</h1>
          <p>
            Here I am gonna share everything about my life. Books I am reading,
            Games I am Playing, Stories and Events
          </p>
        </div>

        <div className="image">
          <img src={landingImage} alt="" />
        </div>
      </div>

      <a href="#articles">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </a>
    </div>
  );
}
