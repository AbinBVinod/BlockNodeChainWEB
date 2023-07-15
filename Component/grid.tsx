import React from 'react';
import 'tailwindcss/tailwind.css';

const Grid: React.FC = () => {
  const gridContainerStyle = 'grid-cols-3 gap-4 md:w-1/2 mx-auto';
  const gridItemStyle = 'bg-white hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center text-gray-800 rounded-lg p-4';
  const gridContainerBgStyle = 'bg-gradient-to-b from-blue-100 to-blue-300';
  const boxShadowStyle = 'shadow-md';
  const gridStyle: React.CSSProperties = {
    height: '50cm',
    borderRadius: '10px',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className={`container no-padding footer-note ${gridContainerBgStyle}`}>
      <div className={`grid ${gridContainerStyle} ${boxShadowStyle}`} style={gridStyle}>

          <div className={gridItemStyle}>
            <div className="rectangle-box">
              <h1 className="text-blue-900">What Does Block Node Chain Network Solve  ?</h1>
             </div>
          </div>
        </div>
    </div>


  );
};

export default Grid;

