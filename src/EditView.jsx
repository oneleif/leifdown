import React from 'react';

export default function EditView({onValueChange, ...rest}) {
  /************************************
   * Render
   ************************************/ 

  return (
     <textarea style={{height: 'inherit'}} {...rest} onChange={onValueChange}></textarea>
  );
}
