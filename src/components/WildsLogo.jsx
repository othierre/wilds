import React from 'react';

const WildsLogo = ({ color = 'currentColor', className = '' }) => {
  // You might need to adjust the SVG content or how the color is applied
  // depending on the actual SVG structure.
  // For simplicity, assuming a basic SVG with fill property.
  return (
    <img 
      src="/logo.svg" 
      alt="Wilds Logo" 
      className={className}
      style={{ filter: color === 'white' ? 'invert(0)' : 'invert(1)' }} // If original SVG is white, invert(0) keeps it white, invert(1) makes it black
    />
  );
};

export default WildsLogo;
