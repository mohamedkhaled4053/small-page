import React from 'react';
import Links from './Links';
import MegaMenu from './MegaMenu';

export default function NavBar() {
  let navLinks = ['articles', 'gallary', 'features', 'other links'];

  return (
    <div className="nav_bar">
      <div className="container">
        <a className="logo" href="#home">
          Games
        </a>
        <div className="links">
          <Links links={navLinks}/>
          <MegaMenu />
        </div>
      </div>
    </div>
  );
}
