import React from 'react';

const Panel = ({ title, description }) => {
  return (
    // Use dark gray background, increased padding, rounded corners, enhanced shadow
    // Add subtle border, green border on hover, scale transform on hover
    <div 
      className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-xl border border-gray-700 
                 cursor-pointer 
                 hover:bg-gray-800 hover:shadow-2xl hover:border-green-600 hover:scale-[1.03]
                 transition duration-300 ease-in-out"
    >
      {/* Adjusted title and description styling */}
      <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 md:mt-3">{description}</p>
    </div>
  );
};

export default Panel;
