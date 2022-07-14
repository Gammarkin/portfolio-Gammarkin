import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function NotFound() {
  const {darkMode} = useContext(AppContext);
  return (
    <main className={`error404__container__${darkMode ? 'dark' : 'light'}`}>
      <h1 className={`error404__${darkMode ? 'dark' : 'light'}`}>404</h1>

      <p className={`error404__message__${darkMode ? 'dark' : 'light'}`}>
        Page not found
      </p>

      <Link to="/">
        <p className={`error404__link__${darkMode ? 'dark' : 'light'}`}>
          Take me back to home
        </p>
      </Link>
    </main>
  );
}
