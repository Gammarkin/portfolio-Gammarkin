import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import {Link} from 'react-router-dom';

export default function Header() {
  const {darkMode, setDarkMode} = useContext(AppContext);

  const handleSetDarkMode = () => {
    window.localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <Link to="/about-me">
        <p>Marcos Roberto</p>
      </Link>

      <button type="button" onClick={handleSetDarkMode}>
        {!darkMode ? 'Light' : 'Dark'}
      </button>

      <Link to="/about-me">
        <p>about me</p>
      </Link>

      <Link to="/projects">
        <p>projects</p>
      </Link>

      <Link to="/contacts">
        <p>How to reach me</p>
      </Link>
    </header>
  );
}
