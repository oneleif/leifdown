import React, { useState } from 'react';
import './App.scss';

import EditView from './EditView';
import DisplayView from './DisplayView';

  /************************************
   * Constants
   ************************************/

const EDIT_VIEW = 'EDIT';
const DISPLAY_VIEW = 'DISPLAY';

export default function EditMode({width = '100%', height = '500px'}) {
  /************************************
   * State
   ************************************/

  const [view, setView] = useState(EDIT_VIEW);
  const [plainText, setPlainText] = useState('');
  const [parseText, setParseText] = useState('');

  function handleValueChange(value) {
    setPlainText(value);
  }

  function handlePreviewClicked() {
    setView(DISPLAY_VIEW);
    setParseText(plainText)
  }

  /************************************
   * Render
   ************************************/ 

   return (
    <div className='edit-mode-container' style={{width: width, height: height}}>
      <div className='button-module'>
        <button onClick={() => setView(EDIT_VIEW)}>Edit</button>
        <button onClick={handlePreviewClicked}>Preview</button>
      </div>
      { view === EDIT_VIEW ? <EditView text={parseText} onValueChange={handleValueChange}/> : <DisplayView text={parseText} /> }
    </div>
  );
}
