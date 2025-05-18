import React from 'react';
import NavBar from '../components/NavBar';


const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default UserLayout;
