import React from 'react';
import Menu from './components/Menu';
import Profile from './components/Profile';
import styled from 'styled-components';
import OverviewIcon from './assets/overview.svg';
import RepositoryIcon from './assets/repository.svg';
import ProjectsIcon from './assets/projects.svg';

const Main = styled.main`
  margin: -8px;
  font-family: sans-serif;
`;

const App = () => {
  return (
    <Main>
      <Menu
        options={[
          { name: 'Overview', icon: <OverviewIcon /> },
          { name: 'Repositories', icon: <RepositoryIcon />, active: true },
          { name: 'Projects', icon: <ProjectsIcon /> },
        ]}
      />
      <Profile />
    </Main>
  );
};
export default App;
