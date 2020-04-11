import React from 'react';

export default function DisplayView({ width = '100%', children }) {
  /************************************
   * Render
   ************************************/ 

  return (
    <div style={{width: width}}> 
      {children ? children : <p>Nothing to Display.</p>}
    </div>
  );
}
