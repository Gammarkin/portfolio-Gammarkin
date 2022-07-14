import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AboutMe from '../pages/AboutMe';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
