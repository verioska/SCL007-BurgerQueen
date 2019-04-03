import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('El espera imprimir el nombre', () => {  
 
const  burgerComponent= Enzyme.mount(<App/>);
const imputComponent= burgerComponent.find("Name").find('input');
const buttonComponent=burgerComponent.find("Name").find('button');
imputComponent.simulate('change', { target: {value: 'verioska'} });
buttonComponent.simulate('click');
  expect(burgerComponent.state().text).toEqual('verioska');
});
it('El espera imprimir el resultado del boton', () => { 

  const  burgerComponent= Enzyme.mount(<App/>);
  const imputComponent= burgerComponent.find("Name").find('input');
  const buttonComponent=burgerComponent.find("Name").find('button');
  imputComponent.simulate('change', { target: {value: 'verioska'} });
  buttonComponent.simulate('click');
    expect(burgerComponent.state().text).toEqual('verioska');
  });

it('consigueme el componente Name, dentro de App', () => {
  
 const infoName= shallow(<App />);
 expect(infoName.find('Name').length).toBe(1);

});
it('consigueme el componente Breakfast, dentro de App', () => {
  
  const infoBreakfast= shallow(<App />);
  expect(infoBreakfast.find('Breakfast').length).toBe(1);
 
 });
 it('consigueme el componente ButtonDay, dentro de App', () => {
  
  const infoButtonDay= shallow(<App />);
  expect(infoButtonDay.find('ButtonDay').length).toBe(1);
 
 });

 