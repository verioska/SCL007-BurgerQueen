import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Name />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Debería ser una funcion',()=>{
    window.assert.equal(typeof window.data.filterData,'function');
});