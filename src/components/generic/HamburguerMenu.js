import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../../context/AppContext';

import {Menu} from '@mantine/core';

export default function HamburguerMenu() {
  const {darkMode, setDarkMode} = useContext(AppContext);

  const handleSetDarkMode = () => {
    window.localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <Menu
      style={darkMode ? {backgroundColor: '#fafafa', borderRadius: '.3em'} : {}}
      className="header__hamburguer__menu"
    >
      <Menu.Label>Utilities</Menu.Label>
      <Menu.Item onClick={handleSetDarkMode}>
        <p
          className={
            darkMode
              ? 'header__utilities__button__dark'
              : 'header__utilities__button__light'
          }
        >
          {!darkMode ? 'Light' : 'Dark'}
        </p>
      </Menu.Item>

      <Menu.Item>
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
      </Menu.Item>

      <Menu.Item>
        <Link to="/projects">
          <p
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            projects
          </p>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/contacts">
          <p
            className={
              darkMode
                ? 'header__utilities__links__dark'
                : 'header__utilities__links__light'
            }
          >
            How to reach me
          </p>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
