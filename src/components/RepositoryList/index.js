import React from 'react';
import Moment from 'react-moment';
import LicenseIcon from '../../assets/license.svg';
import StarsIcon from '../../assets/stars.svg';
import ClearIcon from '../../assets/clear.svg';
import {
  Repositories,
  Repository,
  Info,
  Stars,
  Name,
  Language,
  UpdatedAt,
  MoreAbout,
  Description,
  LanguageColor,
  License,
  StarsButton,
  ResultContainer,
  ClearButton,
} from './style';
import { COLORS } from './colors';
import PropTypes from 'prop-types';

const RepositoryList = ({ repositories, searchTerm, handleClear }) => {
  const getLicense = rep => {
    if (rep.license !== null) {
      return (
        <License>
          <LicenseIcon />
          {rep.license.name}
        </License>
      );
    }
  };

  const getResult = () => {
    if (searchTerm != '') {
      return (
        <ResultContainer>
          <div className="searched-result">
            <span className="number">{repositories.length}</span> results for
            repositories matching
            <span className="result">{searchTerm}</span>
          </div>
          <ClearButton onClick={handleClear}>
            <ClearIcon />
            Clear filter
          </ClearButton>
        </ResultContainer>
      );
    }
  };

  const getRepositoryLanguage = rep => {
    if (rep.language !== null) {
      return (
        <>
          <LanguageColor
            style={{ backgroundColor: COLORS[rep.language] }}
          ></LanguageColor>
          <Language>{rep.language}</Language>
        </>
      );
    }
  };

  const getRepos = () => {
    if (repositories.length > 0) {
      return repositories.map((rep, idx) => {
        return (
          <Repository key={idx}>
            <Info>
              <Name href="">{rep.name}</Name>
              <Description>{rep.description}</Description>
              <MoreAbout>
                {getRepositoryLanguage(rep)}
                {getLicense(rep)}
                <UpdatedAt>
                  Updated on{' '}
                  <Moment format="MMM DD,\ YYYY">{rep.updated_at}</Moment>
                </UpdatedAt>
              </MoreAbout>
            </Info>
            <Stars>
              <StarsButton>
                <StarsIcon />
                Stars
              </StarsButton>
            </Stars>
          </Repository>
        );
      });
    } else {
      return <h2>User doesn’t have any repositories that match</h2>;
    }
  };

  return (
    <Repositories>
      {getResult()}
      {getRepos()}
    </Repositories>
  );
};

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
  handleClear: PropTypes.func.isRequired,
};

export default RepositoryList;
