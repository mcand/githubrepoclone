import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/Menu';

const menuOptions = [
  { name: 'Overview' },
  { name: 'Repositories', active: true },
  { name: 'Projects' },
];

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu options={menuOptions} />);
  });

  it('renders a <nav>', () => {
    expect(wrapper.dive().type()).toBe('nav');
  });

  it('renders menu options', () => {
    expect(wrapper.dive().children()).toHaveLength(menuOptions.length);
  });

  it('renders <a> with a title', () => {
    const links = wrapper.dive();

    menuOptions.map((option, idx) => {
      let anOption = links.childAt(idx).dive();
      expect(anOption.type()).toBe('a');
      expect(anOption.text()).toBe(option.name);
    });
  });
});

/*
  <Menu options=[{name: 'Overview', icon: svg }, {name: 'Repositories', icon: svg, number: 44, active: true}, {name: 'Projects', icon: svg}] />
*/
