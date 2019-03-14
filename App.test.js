import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';
configure({ adapter: new Adapter() });

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
 