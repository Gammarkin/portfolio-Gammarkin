import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function NotFound() {
  const {darkMode} = useContext(AppContext);
  return (
    <main className={`404__container__${darkMode ? 'dark' : 'light'}`}>
      <h1 className={`404__error__${darkMode ? 'dark' : 'light'}`}>404</h1>

      <p className={`404__error__message__${darkMode ? 'dark' : 'light'}`}>
        Page not found
      </p>

      <Link to="/">
        <p className={`404__error__link__${darkMode ? 'dark' : 'light'}`}>
          Take me back to home
        </p>
      </Link>
    </main>
  );
}
