import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const [lastClicked, setLastClicked] = useState('');

  useEffect(() => {
    const darkModeFromLocalStorage =
      JSON.parse(window.localStorage.getItem('darkMode')) || false;

    setDarkMode(darkModeFromLocalStorage);
  }, []);

  const itemsToShare = {
    darkMode,
    setDarkMode,
    lastClicked,
    setLastClicked,
  };
  return (
    <AppContext.Provider value={itemsToShare}>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
