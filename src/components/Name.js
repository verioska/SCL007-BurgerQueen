import React from 'react';
import  './Name.css';

function Name (props) {

 
    return (
      <div >
       
        <form onSubmit={props.onSubmit}>
          <input
            id="new-todo"
           onChange={props.onChange}
            value={props.text}
            placeholder="Nombre del Cliente"
            />
          <button className="send">
            enviar
          </button>
          
        </form>
      </div>
    );
  
}


export default Name;




