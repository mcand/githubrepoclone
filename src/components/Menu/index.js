import React from 'react';
import PropTypes from 'prop-types';
import { MenuContainer, MenuItem } from './style';

const Menu = ({ options }) => {
  const getOptions = () => {
    const menuOptions = options.map((option, idx) => (
      <MenuItem key={idx} href="" active={option.active}>
        {option.icon}
        {option.name}
      </MenuItem>
    ));

    return menuOptions;
  };

  return <MenuContainer>{getOptions()}</MenuContainer>;
};

Menu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element,
      active: PropTypes.bool,
    })
  ),
};

Menu.defaultProps = {
  options: {
    active: false,
  },
};

export default Menu;
