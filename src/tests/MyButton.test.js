import React from 'react';
import { shallow } from 'enzyme';
import MyButton from '../App';

describe('MyButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<MyButton />);
    expect(wrapper.type()).toBe('button');
  });
});
