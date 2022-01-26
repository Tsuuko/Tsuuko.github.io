import React from 'react';
import { Link } from 'react-location';

export const Home = () => (
  <div>
    <h1>Hello!</h1>
    <p>This site is under construction...</p>
    <ul>
      <li>
        <Link to="sandbox">sandbox</Link>
      </li>
      <li>
        <Link to="undefined_route">404</Link>
      </li>
    </ul>
  </div>
);
