import React, { useState } from 'react';
import EditView from './EditView';
import DisplayView from './DisplayView';

  /************************************
   * Constants
   ************************************/

const EDIT_VIEW = 'EDIT';
const DISPLAY_VIEW = 'DISPLAY';

export default function EditMode() {
  /************************************
   * State
   ************************************/

  const [view, setView] = useState(EDIT_VIEW);

  /************************************
   * Render
   ************************************/ 
  
  return (
    <div>
        <button onClick={() => {setView(EDIT_VIEW)}}>Edit</button>
        <button onClick={() => {setView(DISPLAY_VIEW)}}>Preview</button>
        { view === EDIT_VIEW ? <EditView /> : <DisplayView /> }
    </div>
  );
}
