import React from 'react';
import { articlesImgs } from '../utils/constants';
import Article from './Article';
import MainTitle from './MainTitle';

export default function Articles() {
  return (
    <div id="articles">
      <MainTitle title="articles" />
      <div className="container">
        {articlesImgs.map((img) => (
          <Article img={img} />
        ))}
      </div>
    </div>
  );
}
