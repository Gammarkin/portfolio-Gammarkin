import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import HamburguerMenu from './HamburguerMenu';

export default function Header() {
  const {darkMode, setDarkMode} = useContext(AppContext);

  const handleSetDarkMode = () => {
    window.localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={
        darkMode ? 'header__container__dark' : 'header__container__light'
      }
    >
      <Link to="/about-me">
        <p
          className={
            darkMode
              ? 'header__container__name__dark'
              : 'header__container__name__light'
          }
        >
          Marcos Roberto
        </p>
      </Link>

      <section className="header__utilities">
        <button
          className={
            darkMode
              ? 'header__utilities__button__dark'
              : 'header__utilities__button__light'
          }
          type="button"
          onClick={handleSetDarkMode}
        >
          {!darkMode ? 'Light' : 'Dark'}
        </button>

        <Link to="/about-me">
          <p
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            about me
          </p>
        </Link>

        <Link to="/work">
          <p
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            Work
          </p>
        </Link>

        <Link to="/contacts">
          <p
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            Contacts
          </p>
        </Link>
      </section>

      <HamburguerMenu />
    </header>
  );
}
