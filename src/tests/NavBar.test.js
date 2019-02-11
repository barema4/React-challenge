import React from 'react';
import {shallow } from 'enzyme';
import Navbar from '../component/Layout/Navbar';
import { Link } from 'react-router-dom';

describe('<Navbar/>', () => {
  it('should render three <Navbar/> elements', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).toHaveLength(0);
  
  });
  
});

it('testing Nav bar using snapshot', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
  
  

});

