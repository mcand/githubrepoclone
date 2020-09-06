import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL, CLIENT_ID, CLIENT_SECRET, USER } from '../../config';
import Avatar from '../Avatar';
import UsersIcon from '../../assets/users.svg';
import LocationIcon from '../../assets/location.svg';
import EmailIcon from '../../assets/email.svg';
import StarsIcon from '../../assets/stars.svg';
import OrganizationList from '../OrganizationList';

import {
  ProfileContainer,
  FullName,
  AccountName,
  SecondaryButton,
  FollowInfo,
  Location,
  Email,
} from './style';
const Profile = () => {
  const [userData, setUserData] = React.useState('');
  const [starsLength, setStarsLength] = React.useState('');
  const [organizations, setOrganizations] = React.useState('');

  useEffect(() => {
    axios
      .get(
        `${URL}/${USER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
      )
      .then(res => {
        setUserData(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://api.github.com/users/mcand/starred`).then(res => {
      setStarsLength(res.data.length);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://api.github.com/users/mcand/orgs`).then(res => {
      setOrganizations(res.data);
    });
  }, []);

  return (
    <ProfileContainer>
      <Avatar source={userData.avatar_url} />
      <h1>
        <FullName>{userData.name}</FullName>
        <AccountName>{userData.login}</AccountName>
      </h1>
      <SecondaryButton>Edit Profile</SecondaryButton>
      <FollowInfo>
        <a href="#">
          <UsersIcon />
          <span>{userData.followers}</span> followers
        </a>
        <span className="separator">.</span>
        <a href="#">
          <span>{userData.following}</span> following
        </a>
        <span className="separator">.</span>
        <a href="#">
          <StarsIcon />
          <span>{starsLength}</span> stars
        </a>
      </FollowInfo>
      <Location>
        <LocationIcon />
        {userData.location}
      </Location>
      <Email>
        <EmailIcon />
        {userData.email}
      </Email>{' '}
      <OrganizationList organizations={organizations} />
    </ProfileContainer>
  );
};

export default Profile;
