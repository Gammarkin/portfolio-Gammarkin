import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
