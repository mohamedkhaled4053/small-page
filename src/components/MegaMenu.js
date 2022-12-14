import React from 'react';
import img from '../imgs/megamenu.png';
import Links from './Links';

export default function MegaMenu() {
  let links1 = [
    'testimonials',
    'team members',
    'services',
    'our skills',
    'how it works',
  ];

  let links2 = [
    'events',
    'pricing plans',
    'top vedios',
    'stats',
    'request a discount',
  ];

  return (
    <div className="mega-menu">
      <div className="mega-img">
        <img src={img} alt="" />
      </div>
      <div className="mega-links">
        <Links links={links1} />
      </div>
      <div className="mega-links">
        <Links links={links2} />
      </div>
    </div>
  );
}
