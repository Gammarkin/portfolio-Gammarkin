import React from 'react';
import {Routes, Route} from 'react-router-dom';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}
