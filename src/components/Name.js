import React from 'react';
import  './Name.css';

function Name (props) {

 
    return (
      <div >
        <h3>Ingresar Nombre</h3>
        <form onSubmit={props.onSubmit}>
          <input
            id="new-todo"
           onChange={props.onChange}
            value={props.text}
            />
          <button>
            enviar
          </button>
          
        </form>
      </div>
    );
  
}


export default Name;




