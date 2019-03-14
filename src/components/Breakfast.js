import React from 'react';
import './Button.css';

function Breakfast (props) {

  return (
    <button id="BtnBreakfast" className="btn btn-outline-primary"  onClick={props.onClick} >
      Desayuno
    </button>
  );
}

export default Breakfast;
