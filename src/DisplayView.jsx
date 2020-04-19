import React from 'react';

import { useParser } from './useParser';

export default function DisplayView({ text, width = '100%' }) {
  const body = useParser(text);

  /************************************
   * Render
   ************************************/ 

  return (
    <div style={{width: width}}> 
      {body}
    </div>
  );
}
