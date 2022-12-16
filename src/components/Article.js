import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Article({ img }) {
  return (
    <div className="article">
      <div className="image">
        <img src={img} alt="" />
      </div>

        <div className="text">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="footer">
          <h4>read more</h4>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
  
    </div>
  );
}
