import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Submit from '../pages/Submit';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/submit" element={<Submit />} />
  </Routes>
);

export default AppRoutes;