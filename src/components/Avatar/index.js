import React from 'react';
import { Photo } from './style';
import PropTypes from 'prop-types';

const Avatar = ({ source }) => {
  return <Photo src={source} />;
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Avatar;
