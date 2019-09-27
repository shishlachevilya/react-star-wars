import React from 'react';
import Icon from './icn-error.svg';

import './ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <div className="error">
      <img src={ Icon } alt="error message"/>
      <span className="sorry">Sorry!</span>
      <span>something wrong</span>
      <span>we already sent droids to fix it</span>
    </div>
  )
};

export default ErrorMessage;
