import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Profile from './components/Profile';
import styled from 'styled-components';
import OverviewIcon from './assets/overview.svg';
import RepositoryIcon from './assets/repository.svg';
import ProjectsIcon from './assets/projects.svg';
import Repository from './components/Repository';
import { CLIENT_ID, CLIENT_SECRET, USER, URL } from './config';
import { Main, Content, Separator, Container } from './style';

const App = () => {
  const [userData, setUserData] = useState('');
  const [userRepositories, setUserRepositories] = useState([]);
  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadUserData = async () => {
    const response = await fetch(
      `${URL}/${USER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const data = await response.json();
    setUserData(data);
  };

  const loadRepositories = async () => {
    const response = await fetch(
      'https://api.github.com/users/mcand/repos?sort=updated_at&per_page=100'
    );
    const data = await response.json();
    setUserRepositories(data);
  };

  return (
    <Main>
      <Separator />
      <Content>
        <Profile userData={userData} />
        <Container>
          <Menu
            options={[
              { name: 'Overview', icon: <OverviewIcon /> },
              {
                name: 'Repositories',
                icon: <RepositoryIcon />,
                active: true,
                count: userRepositories.length,
              },
              { name: 'Projects', icon: <ProjectsIcon /> },
            ]}
          />
          <Repository repositories={userRepositories} />
        </Container>
      </Content>
    </Main>
  );
};
export default App;
