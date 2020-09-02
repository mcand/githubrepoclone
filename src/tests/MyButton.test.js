import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyButton from '../App';

configure({ adapter: new Adapter() });

describe('MyButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<MyButton />);
    expect(wrapper.type()).toBe('button');
  });
});
