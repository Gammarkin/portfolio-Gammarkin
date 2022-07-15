import React, {useContext, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import HamburguerMenu from './HamburguerMenu';

import light from '../../icons/iconmonstr-flashlight-14.png';
import dark from '../../icons/iconmonstr-weather-115-240.png';

const darkModeColor = 'orange';
const lightModeColor = 'hsl(30, 80%, 70%)';

export default function Header() {
  const {darkMode, setDarkMode, lastClicked, setLastClicked} =
    useContext(AppContext);

  const {pathname} = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/':
        setLastClicked('');
        break;
      case '/about-me':
        setLastClicked('about-me');
        break;
      case '/contacts':
        setLastClicked('contacts');
        break;
      case '/projects':
        setLastClicked('projects');
        break;
      default:
        setLastClicked('');
        break;
    }
  });

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
      <Link to="/">
        <p
          style={
            lastClicked === ''
              ? {
                  color: darkMode ? darkModeColor : lightModeColor,
                }
              : {}
          }
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
          <img
            style={{borderRadius: '5em'}}
            width={30}
            src={darkMode ? dark : light}
            alt="dark mode icon"
          />
        </button>

        <Link to="/about-me">
          <p
            style={
              lastClicked === 'about-me'
                ? {
                    color: darkMode ? darkModeColor : lightModeColor,
                  }
                : {}
            }
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            About me
          </p>
        </Link>

        <Link to="/projects">
          <p
            style={
              lastClicked === 'projects'
                ? {
                    color: darkMode ? darkModeColor : lightModeColor,
                  }
                : {}
            }
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            Projects
          </p>
        </Link>

        <Link to="/contacts">
          <p
            style={
              lastClicked === 'contacts'
                ? {
                    color: darkMode ? darkModeColor : lightModeColor,
                  }
                : {}
            }
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
