import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css'

export default function Header() {
  return (
    <div className="container">
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login / Criar</Link>
      </nav>

    </div>
  );
}
