import React from 'react';

export default function NavBar() {
  let navLinks = ['articles', 'gallary', 'features', 'other links'];

  return (
    <div className="nav_bar">
      <div className="container">
        <nav>
          <a className='logo' href='#'>Games</a>
          <div className="links">
            {navLinks.map((link) => (
              <a key={link} href={'#' + link}>{link}</a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
