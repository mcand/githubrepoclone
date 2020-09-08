import React, { useState } from 'react';
import RepositorySearch from '../RepositorySearch';
import RepositoryList from '../RepositoryList';
import { RepositoryContainer } from './style';
import PropTypes from 'prop-types';

const Repository = ({ repositories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = repositories => {
    if (searchTerm != '') {
      return repositories.filter(rep => {
        const searchedRepositories = rep.name.includes(searchTerm);
        return searchedRepositories;
      });
    } else {
      return repositories;
    }
  };
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    const input = document.getElementById('searchInput');
    input.value = '';
  };

  return (
    <>
      <RepositoryContainer>
        <RepositorySearch callback={handleChange} searchTerm={searchTerm} />
        <RepositoryList
          repositories={search(repositories)}
          searchTerm={searchTerm}
          handleClear={handleClear}
        />
      </RepositoryContainer>
    </>
  );
};

Repository.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default Repository;
