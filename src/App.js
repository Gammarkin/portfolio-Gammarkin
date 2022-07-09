import React from 'react';
import MainRoutes from './routes/MainRoutes';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
}

export default App;
