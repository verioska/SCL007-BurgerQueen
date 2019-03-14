import React from 'react';
import Name from '../components/Name';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  
 shallow(<Name />);


});


