import React from 'react';
import MainRoutes from './routes/MainRoutes';
import AppProvider from './context/AppProvider';
import './css/style.min.css';

function App() {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
}

export default App;
