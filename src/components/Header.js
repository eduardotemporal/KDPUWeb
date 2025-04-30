import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    // Use dark gray background, use custom accent for bottom border, adjust padding
    <header className="bg-gray-900 p-4 md:px-8 border-b border-kpdu-accent flex items-center justify-between">
      <div className="flex items-center">
        {/* Keep logo size */}
        <img src={logo} alt="CSA Logo" className="h-12 w-auto mr-4" /> 
        {/* Adjust title size and change weight to bold */}
        <h1 className="text-white text-xl md:text-2xl font-bold">KPDU - Center for Social Action</h1>
      </div>
      {/* Navigation or other elements can go here */}
    </header>
  );
};

export default Header;
