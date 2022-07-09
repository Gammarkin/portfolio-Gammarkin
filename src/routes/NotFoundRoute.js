import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NotFound from '../components/NotFound';

export default function NotFoundRoute() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
