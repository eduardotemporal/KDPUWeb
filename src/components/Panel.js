import React from 'react';

const Panel = ({ title, description }) => {
  return (
    // Use dark gray background, increased padding, rounded corners, enhanced shadow
    // Updated rounding, shadow. Added icon structure.
    <div 
      className="bg-kpdu-card p-6 md:p-8 rounded-2xl shadow-lg border border-kpdu-card 
                 cursor-pointer 
                 hover:bg-gray-800 hover:shadow-2xl hover:border-kpdu-accent hover:scale-[1.03]
                 transition duration-300 ease-in-out"
    >
      {/* Icon and Title structure - Use font-bold */}
      <div className="flex items-center text-kpdu-text-light text-lg md:text-xl font-bold">
        <span className="mr-2">[Icon]</span> 
        <span>{title}</span>
      </div>
      {/* Description */}
      <p className="text-kpdu-text-dark mt-2 md:mt-3">{description}</p>
    </div>
  );
};

export default Panel;
