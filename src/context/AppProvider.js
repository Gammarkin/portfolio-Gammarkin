import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);

  const itemsToShare = {darkMode, setDarkMode};
  return (
    <AppContext.Provider value={itemsToShare}>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
