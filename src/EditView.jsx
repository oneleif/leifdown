import React from 'react';

export default function EditView({ text, onValueChange, ...rest }) {
  /************************************
   * Render
   ************************************/ 

  return (
  <textarea style={{height: 'inherit'}} {...rest} onChange={(event) => onValueChange(event.target.value)}>{text}</textarea>
  );
}
