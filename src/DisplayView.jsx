import React from 'react';

export default function DisplayView({ children }) {
  /************************************
   * Render
   ************************************/ 

  return (
    <> 
      {children ? children : <p>Nothing to Display.</p>}
    </>
  );
}
