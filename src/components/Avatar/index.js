import React from 'react';
import { Photo } from './style';

const Avatar = source => {
  return <Photo src={source.source} width="260" />;
};

export default Avatar;
