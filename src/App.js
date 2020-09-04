import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import OverviewIcon from './assets/overview.svg';
import RepositoryIcon from './assets/repository.svg';
import ProjectsIcon from './assets/projects.svg';

const Main = styled.main`
  margin: -8px;
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
    </Main>
  );
};
export default App;
