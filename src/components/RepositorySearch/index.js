import React from 'react';
import { RepositorySearchContainer, SearchInput } from './style';
import PropTypes from 'prop-types';

const RepositoryList = ({ callback }) => {
  return (
    <RepositorySearchContainer>
      <div>
        <SearchInput
          id="searchInput"
          onChange={() => {
            callback(event);
          }}
          type="search"
          placeholder="Find a repository"
        />
      </div>
    </RepositorySearchContainer>
  );
};

RepositoryList.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default RepositoryList;
