import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ links, className }) {
  return (
    <nav>
      <ul className={className}>
        {links.map((link) => (
          <li key={link.key}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
