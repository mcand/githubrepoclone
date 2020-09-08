import React from 'react';
import { OrganizationContainer } from './style';
import PropTypes from 'prop-types';

const OrganizationList = organizations => {
  return (
    <OrganizationContainer>
      <h2>Organizations</h2>
    </OrganizationContainer>
  );
};

OrganizationList.propTypes = {
  organizations: PropTypes.object,
};

export default OrganizationList;
