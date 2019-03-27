import React from 'react';
import './MenuDelDia.css';



function ButtonDay (props) {

  return (
    <button id="BtnDay"className="btn btn-outline-primary"  onClick={props.onClickDay} >
      Menú del Día
    </button>
  );
}

export default ButtonDay;
