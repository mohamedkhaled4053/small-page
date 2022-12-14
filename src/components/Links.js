import React from 'react';

export default function Links({ links }) {
  return (
    <>
      {links.map((link) => (
        <>
          <a key={link} href={'#' + link}>
            {link}
          </a>
        </>
      ))}
    </>
  );
}
